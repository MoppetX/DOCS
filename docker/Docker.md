# Docker





docker build -t moppet/cheers2019 .

docker run -it --rm moppet/cheers2019

Once you're ready to share your container with the world, push the image that describes it to Docker Hub

```bash
docker login
docker push moppet/cheers2019
```

`docker-compose down && time docker-compose up --build`

` time docker-compose up -d`

