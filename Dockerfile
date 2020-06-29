FROM ninjawulf98/alpine-node-ci

COPY . /srv
ARG TESTING
ENV TESTING=$TESTING
RUN yarn --frozen-lockfile --no-cache
CMD ["./scripts/start.sh"]
EXPOSE 9222
