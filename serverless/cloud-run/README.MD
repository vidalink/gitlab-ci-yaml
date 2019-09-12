# .gitlab-ci.yml to integrate gitlab with gcloud cloud run
## Variables
- GCLOUD_SERVICE_ACCOUNT = service account json with formatted data
- CLOUDSDK_CORE_PROJECT = google cloud unique project id
- GCLOUD_PROJECT_REGION = google cloud region where you would like to run your application
- BUILD_DOCKER_IMAGE = Dockerfile used to build and run your application
