package:
	sam package --template-file template.yaml --s3-bucket fq-fq2-sam-packages-poc --output-template-file package.yaml

deploy:
	sam deploy --template-file package.yaml --stack-name serverless-stack --capabilities CAPABILITY_IAM

teardown:
	aws cloudformation delete-stack --stack-name serverless-stack
