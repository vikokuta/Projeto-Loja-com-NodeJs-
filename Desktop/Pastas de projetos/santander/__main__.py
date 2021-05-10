import ibm_boto3
from ibm_botocore.client import Config
#ClientError from nmf_converter 
import convert_to_wav
credentials = {
  "COS_ENDPOINT": "https://s3.us-south.objectstorage.softlayer.net",
  "COS_API_KEY_ID": "CKeQWKX-wH_ldOUYoWdgmhbljGAqWu3zXWiAKTgSKTKT",
  "COS_SERVICE_CRN":"crn:v1:bluemix:public:cloud-object-storage:global:a/a9e1e122f804af33a9bcdd1f158fae53:0ebe7b76-56bc-4006-a60b-b9ce3b64e60b::",
}
cos = ibm_boto3.resource("s3",
    ibm_api_key_id=credentials["COS_API_KEY_ID"],
    ibm_service_instance_id=credentials["COS_SERVICE_CRN"],
    config=Config(signature_version="oauth"),
    endpoint_url=credentials["COS_ENDPOINT"]
)
def cos_download(bucket_name='audios-santander', item_name = ''): 
    cos.Object(bucket_name, item_name).download_file(item_name)
def cos_upload(bucket_name='audios-santander', item_name=''):
    return cos.meta.client.upload_file(item_name, bucket_name, item_name)
def main(args):
    bucket_name = args.get("bucketName","")
    item_name = args.get("fileName","")
    cos_download(bucket_name, item_name)
    convert_to_wav(item_name)
    cos_upload(bucket_name2, item_name2)
    return {bucket_name2, item_name2}

print(main({"bucketName": "audios-santander", "fileName": ""}))

