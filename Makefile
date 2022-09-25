.ONESHELL:
SHELL = bash

GIT_USER_ID = libretime
GIT_REPO_ID = client

GENERATOR_CLI = docker run \
	--rm \
	--volume="$$PWD:/local" \
	--user="$$UID:$$GID" \
	$(shell docker build -q .)

GENERATATE_CMD = $(GENERATOR_CLI) generate \
		--input-spec /local/schema.yml \
		--git-user-id $(GIT_USER_ID) \
		--git-repo-id $(GIT_REPO_ID)

all: javascript-client php-client python-client

.PHONY: javascript-client
javascript-client:
	$(GENERATATE_CMD) \
		--generator-name typescript-axios \
		--output /local/javascript-client \
		--package-name libretime-client \
		--additional-properties=npmName=libretime-client \
		--additional-properties=supportsES6=true \
		--additional-properties=withSeparateModelsAndApi=true \
		--additional-properties=apiPackage=api \
		--additional-properties=modelPackage=model

.PHONY: php-client
php-client:
	$(GENERATATE_CMD) \
		--generator-name php \
		--output /local/php-client \
		--package-name libretime/client \
		--additional-properties=invokerPackage=Libretime\\Client \
		--additional-properties=apiPackage=Api \
		--additional-properties=modelPackage=Model

.PHONY: python-client
python-client:
	$(GENERATATE_CMD) \
		--generator-name python \
		--output /local/python-client \
		--package-name libretime_client \
		--additional-properties=packageUrl=https://github.com/libretime/client
