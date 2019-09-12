# .gitlab-ci.yml to integrate gitlab with gcloud cloud run
## Variables
- GCLOUD_SERVICE_ACCOUNT = service account json with formatted data
- GCLOUD_PROJECT_ID = google cloud unique project id
- GCLOUD_PROJECT_REGION = google cloud region where you would like to run your application
- BUILD_DOCKER_IMAGE = Dockerfile used to build and run your application
- PROJECT_PATH = root based path to your application
