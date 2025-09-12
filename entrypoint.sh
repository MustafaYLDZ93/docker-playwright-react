#!/usr/bin/env sh
set -e

if [ "${RUN_BUILD:-0}" = "1" ]; then
  echo "→ pnpm run build"
  pnpm run build
fi

echo "→ serve"
serve -s dist -l 5173

echo "→ pnpm run test2"
pnpm exec playwright test

echo "→ pnpm run ui-report"
exec pnpm exec playwright show-report test-resultsUI/html-report --port 9444