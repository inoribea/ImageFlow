func TestS3Upload(t *testing.T) {
	ctx := context.Background()
	storage, err := NewS3Storage(ctx)
	assert.Nil(t, err)

	testData :=[][]byte("test image data")
	err = storage.UploadImage(ctx, "test.webp", bytes.NewReader(testData))
	assert.Nil(t, err)

	data, err := storage.DownloadImage(ctx, "test.webp")
	assert.Nil(t, err)
	assert.Equal(t, testData, data)
}
