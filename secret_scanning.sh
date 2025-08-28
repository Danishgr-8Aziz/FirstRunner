#!/usr/bin/env bash
#
# Secret Scanning Script with TruffleHog3
# Usage: ./secret_scan.sh <git_repo_url>
#

set -euo pipefail

# Input validation
if [ $# -lt 1 ]; then
    echo "Usage: $0 <git_repo_url>"
    exit 1
fi

REPO_URL="$1"
WORKDIR="secret_scan_repo"
JSON_REPORT="report.json"
HTML_REPORT="report.html"

echo "[+] Cloning and scanning latest 10 commits from: $REPO_URL"
trufflehog3 --depth 10 "$REPO_URL"

echo "[+] Running scan on current directory without Git history"
trufflehog3 --no-history --format json --output "$JSON_REPORT"

echo "[+] Generating HTML report from JSON results"
trufflehog3 -R "$JSON_REPORT" --output "$HTML_REPORT"

echo "[✓] Secret scanning completed."
echo "    JSON Report: $(pwd)/$JSON_REPORT"
echo "    HTML Report: $(pwd)/$HTML_REPORT"
