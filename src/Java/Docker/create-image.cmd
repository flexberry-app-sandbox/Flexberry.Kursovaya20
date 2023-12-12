docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya20-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya20-java/app ../../..
