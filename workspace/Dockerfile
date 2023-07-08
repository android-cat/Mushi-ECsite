# install php-apache image
FROM php:8.1-fpm-alpine

# install composer
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin



# install packages
RUN apk update
RUN apk add git nodejs npm

# copy php.ini
COPY php.ini /usr/local/etc/php/

# install php extensions
RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www/html/my-app