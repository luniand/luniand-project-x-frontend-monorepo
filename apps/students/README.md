# Project X MVP Guide

## Run project
> We use `pnpm` instead of `npm` or `yarn`. Please just use `pnpm` for this project

```bash
# Install common packages
pnpm i

# Install students project packages
pnpm i --filter=students

# Run students project
pnpm run --filter=students dev
```

## Install https for development environment

To install `mkcert`, follow this link: https://github.com/FiloSottile/mkcert. After install `mkcert`

```bash
# Go to /apps/students
cd apps/students

# Create cert file
mkcert -key-file key.pem -cert-file cert.pem localhost

# Verify cert file
mkcert -install

# Run project. Note: go to root project before do this like cd ../../
pnpm run --filter=students dev
```



