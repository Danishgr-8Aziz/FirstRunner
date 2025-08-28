// Fake secrets for testing secret scanners only
// DO NOT use these anywhere outside of testing pipelines

// AWS Access Keys
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Google API Key
const GOOGLE_API_KEY = "AIzaSyD-fake-key-1234567890abcdefGHIJK";

// GitHub Personal Access Token (fake format)
const GITHUB_TOKEN = "ghp_FAKEKEY1234567890abcdefGHIJKLMNOPQ";

// Slack Bot Token
const SLACK_BOT_TOKEN = "xoxb-123456789012-1234567890123-ABCDEFGHIJKLMNopqrst";

// JWT Secret
const JWT_SECRET = "supersecretjwtkeysupersecretjwtkey";

// Database credentials
const DB_USER = "admin";
const DB_PASS = "P@ssw0rd123!";
const DB_CONN = "postgres://admin:P@ssw0rd123!@localhost:5432/mydb";

// Private RSA Key (truncated/fake)
const PRIVATE_KEY = `
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAuFAKEfakelooK3KEYSg6Xf3q6e8bdkQbzDk3cl+94HJjXtN
Y9jsQ4S87gRydSL0fmc2j7zvP7C/secretKEYshere/lskdjfKJH2348==
-----END RSA PRIVATE KEY-----
`;

// Stripe Secret Key
const STRIPE_SECRET_KEY = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";

// Azure Storage Connection String
const AZURE_STORAGE_CONN = "DefaultEndpointsProtocol=https;AccountName=fakestorage;AccountKey=FAKEKEY1234567890abcdef==;EndpointSuffix=core.windows.net";

// Password in plain text
const ADMIN_PASSWORD = "SuperSecret!123";

// Generic API key
const API_KEY = "12345-ABCDE-SECRET-FAKE-KEY";

// Hardcoded SSH private key (fake)
const SSH_KEY = `
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAFAAAAAtz
c2gtZWQyNTUxOQAAACDnEXAMPLEKEYonlyfortestingabcdEfghIJklmnop==
-----END OPENSSH PRIVATE KEY-----
`;
