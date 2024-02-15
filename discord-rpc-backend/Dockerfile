FROM node:18.18-alpine

WORKDIR /usr/src/app

COPY yarn.lock ./

RUN yarn install

COPY . .

ENV PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1

RUN npx prisma generate

EXPOSE 3000

CMD ["yarn", "start"]
