<?php

namespace App\Action\CloudFlare;

use Exception;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class CloudFlareStoreAction
{
	protected $key = '';

	protected $account = '';

	protected $httpClient = '';

	/**
	 * ApiClient constructor
	 *
	 * @throws NoKeyOrAccountProvided|\Throwable
	 */
	public function __construct()
	{
		$this->account = 'a08007de9a5430d1a7fa3c01a00a883e';
		$this->key     = '4afsUCNlS6sROXGQB5EftCYNQwTkLpaOnqyknpsi';
		$url           = "https://api.cloudflare.com/client/v4/accounts/$this->account/images/";

		$this->httpClient = Http::withToken($this->key)->baseUrl($url);
	}

	/**
	 * Execute resize request to cloudflare
	 *
	 * @param [type] $file
	 * @param [type] $deleteFile
	 * @param  string  $baseFolder
	 * @param [type] $resizeSizes
	 * @return void
	 */
	public function execute($file, $deleteFile, $baseFolder, $resizeSizes)
	{
		if ($file instanceof UploadedFile) {
			$path = $file->getRealPath();
		} else {
			$path = $file;
		}

		$customImageID = date('ymdhis') . '-quill';
		$code          = date('ymdhis') . '-' . rand(1111, 9999);
		$fileName      = $code . $file->getClientOriginalName();
		$string_sizes  = explode(',', $resizeSizes);
		$size          = $resizeSizes[count($string_sizes) - 1];
		$result        = $this->httpClient->asMultipart()
			->post('v1', [
				'file'              => [
					'Content-type' => 'multipart/form-data',
					'name'         => 'file',
					'contents'     => fopen($path, 'rb'),
					'filename'     => $fileName ?: basename($path),
					'size'         => $size,
				],
				'id'                => $customImageID,
				'requireSignedURLs' => var_export(false, true),
				'metadata'          => json_encode(['image_for' => 'quill']),

			])->json();

		if ($result['success']) {
			$images = $result['result']['variants'] ?? [];

			$cloudPaths = [];
			$i          = 0;
			foreach ($images as $key => $image) {
				$ex        = explode('/', $image);
				$imageType = end($ex);

				if ($imageType == 'original') {
					$cloudPaths += ['original' => $image];
				} else {
					$keyName = $this->keyName($imageType);
					$cloudPaths += ["resize{$keyName}" => $image];
					$i++;
				}
			}

			$path = $this->storeInLocalStorage($cloudPaths, $baseFolder, $resizeSizes, $result);

			if (!empty($deleteFile)) {
				$this->deleteCloudFlareImage($result);
			}

			return $path;
		} else {

			throw new Exception($result['errors'][0]);

			return;
		}
	}

	public function deleteCloudFlareImage($response)
	{
		$apiToken = 'BJXzFRWyKvV7wQVSmk4i47GfSbhBZbOv';
		$accountId = 'a08007de9a5430d1a7fa3c01a00a883e';
		$imageId = $response['result']['id'];
		$deleteResponse = Http::withToken($this->key)
			->delete("https://api.cloudflare.com/client/v4/accounts/{$this->account}/images/v1/{$imageId}")
			->json();

		$result        = $this->httpClient->delete('v1', [
			'id'                => $imageId,
		])->json();

		if (isset($deleteResponse['success']) && $deleteResponse['success']) {
			return response()->json([
				'message' => 'Image uploaded and deleted successfully!',
				'deleted_image_id' => $imageId,
			]);
		} else {
			return response()->json([
				'message' => 'Image uploaded but deletion failed!',
				'error' => $deleteResponse,
			], 500);
		}
	}

	/**
	 * Store cloudflare image to local storage
	 *
	 * @param [type] $cloudPaths
	 * @param [type] $baseFolder
	 * @param [type] $resizeSizes
	 * @return array
	 */
	public function storeInLocalStorage($cloudPaths, $baseFolder, $resizeSizes, $result)
	{
		$sizes           = [];
		$localPaths      = [];
		$orginalImageUrl = str_replace('/original', '', $cloudPaths['original']);

		if (!empty($resizeSizes)) {
			$sizeStrings = explode(',', $resizeSizes);
			foreach ($sizeStrings as $sizeString) {
				[$width, $height] = explode('x', $sizeString);
				$sizeKey          = $sizeString;
				$sizeValue        = "w=$width,h=$height";
				$sizes[$sizeKey]  = $sizeValue;
			}

			// Save the custom size...
			foreach ($sizes as $key => $size) {
				$subFolder = "{$baseFolder}/{$key}";
				if (!Storage::exists($subFolder)) {
					Storage::makeDirectory($subFolder);
				}
				$urlWithSize   = "{$orginalImageUrl}/{$size}";
				$imageContents = (new Client())->get($urlWithSize)->getBody()->getContents();
				$fileName      = uuid() . '.avif';

				$localPaths[$key] = "{$subFolder}/{$fileName}";
				$filePath         = "{$subFolder}/{$fileName}";
				Storage::put($filePath, $imageContents);
			}

			// Save the orginal one...
			$subFolder     = "{$baseFolder}/original";
			$imageOriginal = "{$orginalImageUrl}/original";
			if (!Storage::exists($subFolder)) {
				Storage::makeDirectory($subFolder);
			}
			$imageContents = (new Client())->get($imageOriginal)->getBody()->getContents();
			$fileName      = uuid() . '.avif';

			$localPaths['original'] = "{$subFolder}/{$fileName}";
			$filePath               = "{$subFolder}/{$fileName}";
			Storage::put($filePath, $imageContents);
		} else {

			// The default cloudflare sizes...
			foreach ($cloudPaths as $key => $imageUrl) {
				$resolution = explode('/', $imageUrl);
				$resolution = end($resolution);
				$resolution = str_replace(['-', 'nogor'], '', $resolution);
				$subFolder  = "{$baseFolder}/{$resolution}";

				if (!Storage::exists($subFolder)) {
					Storage::makeDirectory($subFolder);
				}

				$imageContents = (new Client())->get($imageUrl)->getBody()->getContents();
				$fileName      = uuid() . '.avif';

				$localPaths[$key] = "{$subFolder}/{$fileName}";
				$filePath         = "{$subFolder}/{$fileName}";
				Storage::put($filePath, $imageContents);
			}
		}

		// $this->deleteCloudFlareImage($result);

		return $localPaths;
	}

	/**
	 * Get the resize name
	 *
	 * @param [type] $keyCheck
	 * @return string
	 */
	public function keyName($keyCheck)
	{
		$resizeArr = [
			'180x180',
			'360x360',
			'540x540',
			'720x720',
			'900x900',
			'1080x1080',
			'1296x1296',
			'100x83',
			'97x97',
		];

		return array_search($keyCheck, $resizeArr);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function destroyImage($paths)
	{
		if (empty($paths['resize1'])) {
			return false;
		}

		$path  = $paths['resize1'];
		$array = explode('/', $path);
		$imageId = prev($array);
		dd($imageId);

		$result = $this->httpClient->delete("v1/$imageId")->json();
		if (!empty($result['success'])) {
			return true;
		}

		return false;
	}
}
