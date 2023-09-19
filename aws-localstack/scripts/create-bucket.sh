BUCKET_NAME=000000

aws \
  s3 mb s3://$BUCKET_NAME 

aws \
  s3 ls