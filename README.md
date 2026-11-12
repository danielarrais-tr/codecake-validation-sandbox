# codecake-validation-sandbox

Throwaway static app used to test testRigor codeCake pull request (branch) validation on a dev environment.

The page has a greeting form and a small task list (add, complete, clear completed, duplicate and empty checks).

Run it locally:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. The dev container starts the same server on port 8000.

To trigger a validation, open a pull request whose title, branch name or description contains the Jira ticket key.
