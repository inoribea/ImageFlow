package handlers

import (
	"context"
	"io"
	"log"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

type S3Storage struct {
	client *s3.Client
	bucket string
}

func NewS3Storage(ctx context.Context) (*S3Storage, error) {
	cfg, err := config.LoadDefaultConfig(ctx,
		config.WithRegion(os.Getenv("AWS_REGION")),
	)
	if err != nil {
		return nil, err
	}

	return &S3Storage{
		client: s3.NewFromConfig(cfg),
		bucket: os.Getenv("S3_BUCKET_NAME"),
	}, nil
}

// 实现图像上传
func (s *S3Storage) UploadImage(ctx context.Context, key string, data io.Reader) error {
	_, err := s.client.PutObject(ctx, &s3.PutObjectInput{
		Bucket: aws.String(s.bucket),
		Key:    aws.String("images/" + key),
		Body:   data,
	})
	return err
}

// 实现图像下载
func (s *S3Storage) DownloadImage(ctx context.Context, key string) ([][]byte, error) {
	result, err := s.client.GetObject(ctx, &s3.GetObjectInput{
		Bucket: aws.String(s.bucket),
		Key:    aws.String("images/" + key),
	})
	if err != nil {
		return nil, err
	}
	defer result.Body.Close()

	return io.ReadAll(result.Body)
}
