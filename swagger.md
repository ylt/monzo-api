Monzo Undocumented API
======================


**Version:** 1.0.0

[Find out more about Swagger](http://swagger.io)

### /account-settings
---
##### ***GET***
**Description:** /account-settings

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiAccountSettings](#apiAccountSettings) |

##### ***PUT***
**Description:** /account-settings

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| magstripe_atm_enabled | formData |  | No | boolean |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiAccountSettings](#apiAccountSettings) |

### /accounts
---
##### ***GET***
**Description:** /accounts

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_type | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiAccounts](#apiAccounts) |

### /api/v2/incidents/unresolved.json
---
##### ***GET***
**Description:** /api/v2/incidents/unresolved.json

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /attachment/deregister
---
##### ***POST***
**Description:** /attachment/deregister

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /attachment/register
---
##### ***POST***
**Description:** /attachment/register

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| external_id | formData |  | No | string |
| file_url | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /attachment/upload
---
##### ***POST***
**Description:** /attachment/upload

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| file_name | formData |  | No | string |
| file_type | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /bacs-direct-debits/instructions
---
##### ***GET***
**Description:** /bacs-direct-debits/instructions

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /bacs-direct-debits/instructions/{direct_debit_id}/cancel
---
##### ***PUT***
**Description:** /bacs-direct-debits/instructions/{direct_debit_id}/cancel

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direct_debit_id | path |  | Yes | string |
| account_id | formData |  | No | string |
| challenge_type | formData |  | No | string |
| challenge | formData |  | No | string |
| idempotency_key | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /balance
---
##### ***GET***
**Description:** /balance

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiBalance](#apiBalance) |

### /balance/limits
---
##### ***GET***
**Description:** /balance/limits

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiBalanceLimits](#apiBalanceLimits) |

### /card-activation/activate
---
##### ***POST***
**Description:** /card-activation/activate

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| card_token | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /card-dispatch/status
---
##### ***GET***
**Description:** /card-dispatch/status

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiCardDispatchStatus](#apiCardDispatchStatus) |

### /card-replacement/activate
---
##### ***POST***
**Description:** /card-replacement/activate

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| old_card_id | formData |  | No | string |
| new_card_token | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /card-replacement/order
---
##### ***POST***
**Description:** /card-replacement/order

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| card_id | formData |  | No | string |
| address[street_address][] | formData |  | No | [ string ] |
| address[locality] | formData |  | No | string |
| address[administrative_area] | formData |  | No | string |
| address[postal_code] | formData |  | No | string |
| address[country] | formData |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiCardReplacementOrder](#apiCardReplacementOrder) |

### /card/list
---
##### ***GET***
**Description:** /card/list

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /card/toggle
---
##### ***PUT***
**Description:** /card/toggle

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| card_id | formData |  | No | string |
| status | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /config
---
##### ***GET***
**Description:** /config

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiConfig](#apiConfig) |

### /contact-discovery/query
---
##### ***GET***
**Description:** /contact-discovery/query

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| hash[][phone] | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /faster-payments/create
---
##### ***POST***
**Description:** /faster-payments/create

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| amount | formData |  | No | number |
| currency | formData |  | No | string |
| beneficiary_account_number | formData |  | No | string |
| beneficiary_sort_code | formData |  | No | string |
| beneficiary_customer_name | formData |  | No | string |
| idempotency_key | formData |  | No | string |
| challenge_type | formData |  | No | string |
| challenge | formData |  | No | string |
| reference | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /fcm/register
---
##### ***POST***
**Description:** /fcm/register

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| device_token | formData |  | No | string |
| app_id | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /feed
---
##### ***GET***
**Description:** /feed

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |
| start_time | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiFeedResponse](#apiFeedResponse) |

### /feed/{id}
---
##### ***DELETE***
**Description:** /feed/{id}

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiFeedItem](#apiFeedItem) |

### /geocode/postal-code-lookup
---
##### ***GET***
**Description:** /geocode/postal-code-lookup

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| postal_code | query |  | No | string |
| country | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /golden-ticket/{id}
---
##### ***GET***
**Description:** /golden-ticket/{id}

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiGoldenTicket](#apiGoldenTicket) |

### /help/content/categories/{id}
---
##### ***GET***
**Description:** /help/content/categories/{id}

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [Section](#section) |

### /help/content/search
---
##### ***GET***
**Description:** /help/content/search

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| q | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [SearchQuery](#searchQuery) |

### /help/content/trending
---
##### ***GET***
**Description:** /help/content/trending

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /identity-verification/register-identity-document
---
##### ***POST***
**Description:** /identity-verification/register-identity-document

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query |  | No | string |
| type | formData |  | No | string |
| issuing_country | formData |  | No | string |
| system_camera_used | formData |  | No | boolean |
| primary_image_file_id | formData |  | No | string |
| secondary_image_file_id | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /identity-verification/register-selfie-video
---
##### ***POST***
**Description:** /identity-verification/register-selfie-video

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query |  | No | string |
| file_id | formData |  | No | string |
| system_camera_used | formData |  | No | boolean |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /identity-verification/request-file-upload
---
##### ***POST***
**Description:** /identity-verification/request-file-upload

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query |  | No | string |
| type | formData |  | No | string |
| file_name | formData |  | No | string |
| content_type | formData |  | No | string |
| content_length | formData |  | No | number |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /identity-verification/status
---
##### ***GET***
**Description:** /identity-verification/status

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /identity-verification/submit
---
##### ***POST***
**Description:** /identity-verification/submit

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /intercom/tokens/{intercom_app_id}
---
##### ***GET***
**Description:** /intercom/tokens/{intercom_app_id}

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| intercom_app_id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiIntercomToken](#apiIntercomToken) |

### /kyc/register
---
##### ***POST***
**Description:** /kyc/register

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_url | formData |  | No | string |
| group_id | formData |  | No | string |
| evidence_type | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /kyc/status
---
##### ***GET***
**Description:** /kyc/status

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /kyc/upload
---
##### ***POST***
**Description:** /kyc/upload

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_name | formData |  | No | string |
| file_type | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /news
---
##### ***GET***
**Description:** /news

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiNews](#apiNews) |

### /oauth2/authorize
---
##### ***POST***
**Description:** /oauth2/authorize

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| email | formData |  | No | string |
| client_id | formData |  | No | string |
| response_type | formData |  | No | string |
| redirect_uri | formData |  | No | string |
| state | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /oauth2/logout
---
##### ***POST***
**Description:** /oauth2/logout

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /oauth2/token
---
##### ***POST***
**Description:** /oauth2/token

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| grant_type | formData |  | No | string |
| code | formData |  | No | string |
| redirect_uri | formData |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiToken](#apiToken) |

### /p2p/recipients
---
##### ***POST***
**Description:** /p2p/recipients

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| candidate[0][username] | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /p2p/transfer
---
##### ***POST***
**Description:** /p2p/transfer

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| recipient | formData |  | No | string |
| recipient_type | formData |  | No | string |
| amount | formData |  | No | number |
| currency | formData |  | No | string |
| challenge_type | formData |  | No | string |
| challenge | formData |  | No | string |
| dedupe_id | formData |  | No | string |
| notes | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /payee/validate
---
##### ***GET***
**Description:** /payee/validate

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_number | query |  | No | string |
| sort_code | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /phone/check-code
---
##### ***POST***
**Description:** /phone/check-code

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| phone_number | formData |  | No | string |
| code | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /phone/send-code
---
##### ***POST***
**Description:** /phone/send-code

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| phone_number | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /pin/sms
---
##### ***POST***
**Description:** /pin/sms

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| date_of_birth | formData |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiPinSms](#apiPinSms) |

### /pin/sms_blocked
---
##### ***GET***
**Description:** /pin/sms_blocked

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /scheduled-payments/series
---
##### ***GET***
**Description:** /scheduled-payments/series

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /scheduled-payments/series/fps
---
##### ***POST***
**Description:** /scheduled-payments/series/fps

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| amount | formData |  | No | number |
| currency | formData |  | No | string |
| beneficiary_account_number | formData |  | No | string |
| beneficiary_sort_code | formData |  | No | string |
| beneficiary_customer_name | formData |  | No | string |
| idempotency_key | formData |  | No | string |
| challenge_type | formData |  | No | string |
| challenge | formData |  | No | string |
| reference | formData |  | No | string |
| start_date | formData |  | No | string |
| interval_type | formData |  | No | string |
| end_date | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /scheduled-payments/series/{series_id}
---
##### ***DELETE***
**Description:** /scheduled-payments/series/{series_id}

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| series_id | path |  | Yes | string |
| account_id | query |  | No | string |
| challenge_type | query |  | No | string |
| challenge | query |  | No | string |
| idempotency_key | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup
---
##### ***POST***
**Description:** /signup

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query |  | No | string |
| v2_enabled | formData |  | No | boolean |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/apply
---
##### ***POST***
**Description:** /signup/apply

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query |  | No | string |
| v2_enabled | formData |  | No | boolean |
| address[street_address][] | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/create
---
##### ***POST***
**Description:** /signup/create

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query |  | No | string |
| address[street_address][] | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/legal-documents/accept
---
##### ***POST***
**Description:** /signup/legal-documents/accept

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| terms_and_conditions_accepted | formData |  | No | boolean |
| terms_and_conditions_version | formData |  | No | string |
| privacy_policy_accepted | formData |  | No | boolean |
| privacy_policy_version | formData |  | No | string |
| fscs_information_sheet_accepted | formData |  | No | boolean |
| fscs_information_sheet_version | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/legal-documents/documents
---
##### ***GET***
**Description:** /signup/legal-documents/documents

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/marketing/subscribe
---
##### ***POST***
**Description:** /signup/marketing/subscribe

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| opt_in | formData |  | No | boolean |
| opt_out | formData |  | No | boolean |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/personal-account/card-order/create
---
##### ***POST***
**Description:** /signup/personal-account/card-order/create

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| name_type | formData |  | No | string |
| pin_type | formData |  | No | string |
| pin | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/personal-account/card-order/options
---
##### ***GET***
**Description:** /signup/personal-account/card-order/options

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/personal-account/start
---
##### ***POST***
**Description:** /signup/personal-account/start

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/personal-account/status
---
##### ***GET***
**Description:** /signup/personal-account/status

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/profile
---
##### ***GET***
**Description:** /signup/profile

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### ***PUT***
**Description:** /signup/profile

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| legal_name | formData |  | No | string |
| preferred_name | formData |  | No | string |
| date_of_birth | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/profile/address
---
##### ***PUT***
**Description:** /signup/profile/address

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| address_id | formData |  | No | string |
| address_lines[] | formData |  | No | string |
| administrative_area | formData |  | No | string |
| postal_code | formData |  | No | string |
| country_code | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/profile/address/search
---
##### ***GET***
**Description:** /signup/profile/address/search

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country_code | query |  | No | string |
| postal_code | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/profile/commit
---
##### ***POST***
**Description:** /signup/profile/commit

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/profile/phone/send
---
##### ***POST***
**Description:** /signup/profile/phone/send

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| phone_number | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /signup/profile/phone/verify
---
##### ***POST***
**Description:** /signup/profile/phone/verify

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| phone_number | formData |  | No | string |
| code | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /stripe/cards
---
##### ***POST***
**Description:** /stripe/cards

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| stripe_token | formData |  | No | string |
| iin | formData |  | No | string |
| save | formData |  | No | boolean |
| idempotency_key | formData |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiStripeCards](#apiStripeCards) |

##### ***GET***
**Description:** /stripe/cards

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiStripeCards](#apiStripeCards) |

### /stripe/three_d_secure
---
##### ***POST***
**Description:** /stripe/three_d_secure

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| currency | formData |  | No | string |
| amount | formData |  | No | number |
| is_initial | formData |  | No | boolean |
| stripe_card_id | formData |  | No | string |
| return_url | formData |  | No | string |
| idempotency_key | formData |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiThreeDsResponse](#apiThreeDsResponse) |

### /stripe/top_up
---
##### ***POST***
**Description:** /stripe/top_up

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| stripe_source | formData |  | No | string |
| currency | formData |  | No | string |
| amount | formData |  | No | number |
| is_initial | formData |  | No | boolean |
| three_d_secure_decision | formData |  | No | string |
| idempotency_key | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /tax-residency/no-tin
---
##### ***POST***
**Description:** /tax-residency/no-tin

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country_code | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /tax-residency/status
---
##### ***GET***
**Description:** /tax-residency/status

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /tax-residency/submit
---
##### ***POST***
**Description:** /tax-residency/submit

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /tax-residency/update-self-certification
---
##### ***POST***
**Description:** /tax-residency/update-self-certification

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| from_summary_screen | formData |  | No | boolean |
| us_citizen | formData |  | No | boolean |
| country_codes[] | formData |  | No | [ string ] |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /tax-residency/update-tin
---
##### ***POST***
**Description:** /tax-residency/update-tin

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country_code | formData |  | No | string |
| type | formData |  | No | string |
| value | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /topup/limits
---
##### ***GET***
**Description:** /topup/limits

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiTopUpLimits](#apiTopUpLimits) |

### /topup/status
---
##### ***GET***
**Description:** /topup/status

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /transactions/update-metadata
---
##### ***POST***
**Description:** /transactions/update-metadata

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| transaction_id | formData |  | No | string |
| metadata[notes] | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /transactions/{transaction_id}
---
##### ***PATCH***
**Description:** /transactions/{transaction_id}

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| transaction_id | path |  | Yes | string |
| category | formData |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiTransaction](#apiTransaction) |

### /user-settings
---
##### ***PUT***
**Description:** /user-settings

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| p2p_enabled | formData |  | No | boolean |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiUserSettings](#apiUserSettings) |

### /waitlist
---
##### ***GET***
**Description:** /waitlist

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ApiAttachment](#apiAttachment) |

### /waitlist/signup
---
##### ***POST***
**Description:** /waitlist/signup

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### Models
---

<a name="apiAddress"></a>**ApiAddress**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressId | string |  | No |
| addressLines | [ string ] |  | No |
| administrativeArea | string |  | No |
| countryCode | string |  | No |
| postalCode | string |  | No |

<a name="apiAccounts"></a>**ApiAccounts**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accounts | [ [ApiAccount](#apiAccount) ] |  | No |

<a name="apiAttachmentResponse"></a>**ApiAttachmentResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachment | [ApiAttachment](#apiAttachment) |  | No |

<a name="apiAccountSettings"></a>**ApiAccountSettings**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| magstripeAtmEnabled | boolean |  | No |
| magstripeAtmEnabledFor | long |  | No |

<a name="apiBalanceLimits"></a>**ApiBalanceLimits**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| annualCashLimit | double |  | No |
| annualCashLimitTotal | double |  | No |
| annualLoadLimit | double |  | No |
| annualLoadLimitTotal | double |  | No |
| dailyCashLimit | double |  | No |
| dailyCashLimitTotal | double |  | No |
| dailyLoadLimit | double |  | No |
| dailyLoadLimitTotal | double |  | No |
| inboundP2pMax | double |  | No |
| maxBalance | double |  | No |
| maxSingleP2pLimit | double |  | No |
| maxSinglePosLimit | double |  | No |
| monthlyCashLimit | double |  | No |
| monthlyCashLimitTotal | double |  | No |
| monthlyInboundP2pLimit | double |  | No |
| monthlyInboundP2pLimitTotal | double |  | No |
| monthlyLoadLimit | double |  | No |
| monthlyLoadLimitTotal | double |  | No |
| monthlyP2pLimit | double |  | No |
| monthlyP2pLimitTotal | double |  | No |
| verificationType | [VerificationType](#verificationType) |  | No |

<a name="apiBalance"></a>**ApiBalance**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | long |  | No |
| currency | string |  | No |
| localSpend | [ [ApiLocalSpend](#apiLocalSpend) ] |  | No |
| spendToday | long |  | No |

<a name="apiCardDispatchStatus"></a>**ApiCardDispatchStatus**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| estimatedDeliveryDate | dateTime |  | No |
| status | object | Unknown type: DispatchStatus | No |

<a name="apiCard"></a>**ApiCard**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| expires | string |  | No |
| id | string |  | No |
| lastDigits | string |  | No |
| processorToken | string |  | No |
| replacementOrdered | long |  | No |
| status | string |  | No |

<a name="apiAccount"></a>**ApiAccount**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string |  | No |
| created | dateTime |  | No |
| description | string |  | No |
| id | string |  | No |
| sortCode | string |  | No |
| type | string |  | No |

<a name="apiCardReplacementOrder"></a>**ApiCardReplacementOrder**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| estimatedDeliveryDate | dateTime |  | No |

<a name="apiCardResponse"></a>**ApiCardResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| card | [ApiCard](#apiCard) |  | No |

<a name="apiCardsResponse"></a>**ApiCardsResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cards | [ [ApiCard](#apiCard) ] |  | No |

<a name="apiCodeCheckResult"></a>**ApiCodeCheckResult**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isOk | boolean |  | No |
| reason | string |  | No |

<a name="apiConfig"></a>**ApiConfig**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| featureFlags | object | Unknown type: FeatureFlags | No |
| inboundP2p | object | Unknown type: InboundP2p | No |
| p2p | object | Unknown type: P2p | No |
| sddSplashscreen | string |  | No |
| username | object | Unknown type: MonzoMeUsername | No |

<a name="apiContactDiscovery"></a>**ApiContactDiscovery**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| phone | object | Unknown type: Map<String, List | No |

<a name="apiGoldenTicket"></a>**ApiGoldenTicket**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| shortUri | string |  | No |
| status | object | Unknown type: GoldenTicketStatus | No |
| ticketId | string |  | No |
| uri | string |  | No |

<a name="apiInitialTopupStatus"></a>**ApiInitialTopupStatus**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| topupAmount | long |  | No |
| topupCurrency | string |  | No |
| topupProcessed | boolean |  | No |

<a name="apiIntercomToken"></a>**ApiIntercomToken**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| token | string |  | No |

<a name="apiLocalSpend"></a>**ApiLocalSpend**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currency | string |  | No |
| spendToday | long |  | No |

<a name="apiNews"></a>**ApiNews**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| posts | [ [ApiNewsItem](#apiNewsItem) ] |  | No |

<a name="apiNewsItem"></a>**ApiNewsItem**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| expires | dateTime |  | No |
| id | string |  | No |
| title | string |  | No |
| uri | string |  | No |

<a name="apiPostcodeResponse"></a>**ApiPostcodeResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| results | [ [LegacyApiAddress](#legacyApiAddress) ] |  | No |

<a name="apiProfile"></a>**ApiProfile**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [LegacyApiAddress](#legacyApiAddress) |  | No |
| addressUpdatable | boolean |  | No |
| dateOfBirth | string |  | No |
| email | string |  | No |
| name | string |  | No |
| phoneNumber | string |  | No |
| preferredName | string |  | No |
| userId | string |  | No |
| userNumber | integer |  | No |

<a name="apiToken"></a>**ApiToken**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accessToken | string |  | No |
| clientId | string |  | No |
| expiresIn | string |  | No |
| refreshToken | string |  | No |
| tokenType | string |  | No |
| userId | string |  | No |

<a name="apiTransactionResponse"></a>**ApiTransactionResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| transaction | [ApiTransaction](#apiTransaction) |  | No |

<a name="apiUserSettings"></a>**ApiUserSettings**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| p2pEnabled | boolean |  | No |

<a name="apiWaitlistPosition"></a>**ApiWaitlistPosition**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| after | integer |  | No |
| events | [ [c](#c) ] |  | No |
| finished | boolean |  | No |
| ineligible | boolean |  | No |
| position | integer |  | No |
| referralBump | integer |  | No |
| referralLink | string |  | No |
| userId | string |  | No |

<a name="legacyApiAddress"></a>**LegacyApiAddress**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| administrativeArea | string |  | No |
| country | string |  | No |
| locality | string |  | No |
| postalCode | string |  | No |
| streetAddress | [ string ] |  | No |

<a name="notificationMessage"></a>**NotificationMessage**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | string |  | No |
| subtitle | string |  | No |
| title | string |  | No |

<a name="verificationType"></a>**VerificationType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="a"></a>**a**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="b"></a>**b**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="c"></a>**c**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="apiUploadContainer"></a>**ApiUploadContainer**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fileUrl | string |  | No |
| uploadUrl | string |  | No |

<a name="contentType"></a>**ContentType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="fileType"></a>**FileType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="fileUpload"></a>**FileUpload**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fileId | string |  | No |
| uploadUrl | string |  | No |

<a name="identityDocumentType"></a>**IdentityDocumentType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="identityVerification"></a>**IdentityVerification**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allowPicker | boolean |  | No |
| allowSystemCamera | boolean |  | No |
| identityDocUploaded | boolean |  | No |
| rejectionNote | string |  | No |
| rejectionReasonCode | string |  | No |
| selfieUploaded | boolean |  | No |
| status | object | Unknown type: Status | No |

<a name="legacyIdType"></a>**LegacyIdType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="legacyKyc"></a>**LegacyKyc**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| evidenceReviewed | boolean |  | No |
| evidenceSubmitted | boolean |  | No |
| status | object | Unknown type: Status | No |

<a name="apiAttachment"></a>**ApiAttachment**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| created | dateTime |  | No |
| externalId | string |  | No |
| fileUrl | string |  | No |
| id | string |  | No |

<a name="apiCounterparty"></a>**ApiCounterparty**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string |  | No |
| name | string |  | No |
| number | string |  | No |
| sortCode | string |  | No |
| userId | string |  | No |

<a name="apiFeedItem"></a>**ApiFeedItem**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appUri | string |  | No |
| created | dateTime |  | No |
| externalId | string |  | No |
| id | string |  | No |
| isDismissable | boolean |  | No |
| params | object | Unknown type: Params | No |
| transaction | [ApiTransaction](#apiTransaction) |  | No |
| type | string |  | No |

<a name="apiFeedResponse"></a>**ApiFeedResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| items | [ [ApiFeedItem](#apiFeedItem) ] |  | No |

<a name="apiMerchant"></a>**ApiMerchant**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [ApiMerchantAddress](#apiMerchantAddress) |  | No |
| atm | boolean |  | No |
| category | string |  | No |
| description | string |  | No |
| emoji | string |  | No |
| groupId | string |  | No |
| id | string |  | No |
| logo | string |  | No |
| name | string |  | No |
| online | boolean |  | No |

<a name="apiMerchantAddress"></a>**ApiMerchantAddress**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| formatted | string |  | No |
| latitude | double |  | No |
| longitude | double |  | No |
| shortFormatted | string |  | No |

<a name="apiMetadata"></a>**ApiMetadata**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bacsDirectDebitInstructionId | string |  | No |
| hideAmount | boolean |  | No |
| inboundP2pId | string |  | No |
| notes | string |  | No |

<a name="apiTransaction"></a>**ApiTransaction**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | long |  | No |
| attachments | [ [ApiAttachment](#apiAttachment) ] |  | No |
| category | string |  | No |
| counterparty | [ApiCounterparty](#apiCounterparty) |  | No |
| created | dateTime |  | No |
| currency | string |  | No |
| declineReason | string |  | No |
| description | string |  | No |
| id | string |  | No |
| includeInSpending | boolean |  | No |
| isLoad | boolean |  | No |
| localAmount | long |  | No |
| localCurrency | string |  | No |
| merchant | [ApiMerchant](#apiMerchant) |  | No |
| metadata | [ApiMetadata](#apiMetadata) |  | No |
| scheme | string |  | No |
| settled | string |  | No |
| updated | dateTime |  | No |

<a name="apiPinSms"></a>**ApiPinSms**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| smsBlocked | boolean |  | No |

<a name="signUpSource"></a>**SignUpSource**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="action"></a>**Action**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| params | object | Unknown type: Params | No |
| title | string |  | No |
| type | string |  | No |

<a name="content"></a>**Content**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sections | [ [Section](#section) ] |  | No |

<a name="searchQuery"></a>**SearchQuery**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| model | string |  | No |
| query | string |  | No |
| sections | [ [Section](#section) ] |  | No |

<a name="section"></a>**Section**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| title | string |  | No |
| topics | [ [Topic](#topic) ] |  | No |

<a name="topic"></a>**Topic**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actions | [ [Action](#action) ] |  | No |
| content | string |  | No |
| id | string |  | No |
| title | string |  | No |

<a name="serviceStatus"></a>**ServiceStatus**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| incidents | [ [ServiceStatusIncident](#serviceStatusIncident) ] |  | No |

<a name="serviceStatusIncident"></a>**ServiceStatusIncident**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| impact | string |  | No |
| name | string |  | No |
| shortlink | string |  | No |
| status | string |  | No |

<a name="data"></a>**Data**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| activeNotifications | integer |  | No |
| amount | integer |  | No |
| androidPayEnabled | boolean |  | No |
| apiErrorCode | string |  | No |
| apiErrorMessage | string |  | No |
| apiStatusCode | integer |  | No |
| appShortcutType | string |  | No |
| authenticate | boolean |  | No |
| cameFrom | string |  | No |
| category | string |  | No |
| contacts | integer |  | No |
| contactsOnMonzo | integer |  | No |
| description | string |  | No |
| diligence | string |  | No |
| docDone | boolean |  | No |
| docType | string |  | No |
| eligible | integer |  | No |
| enabled | boolean |  | No |
| errorType | string |  | No |
| fallback | boolean |  | No |
| feedback | string |  | No |
| fingerprintAuth | string |  | No |
| firstSampleDelta | long |  | No |
| firstTime | boolean |  | No |
| from | string |  | No |
| gpsAdid | string |  | No |
| granted | boolean |  | No |
| kycRejected | boolean |  | No |
| logoutReason | string |  | No |
| memoryError | boolean |  | No |
| method | string |  | No |
| month | integer |  | No |
| newCategory | string |  | No |
| nfcEnabled | boolean |  | No |
| notificationSubType | string |  | No |
| notificationType | string |  | No |
| oldCategory | string |  | No |
| openedFrom | string |  | No |
| optedIn | boolean |  | No |
| outcome | string |  | No |
| path | string |  | No |
| redirectId | string |  | No |
| referrer | string |  | No |
| reportMonth | string |  | No |
| sampleError | boolean |  | No |
| secondSampleDelta | long |  | No |
| selfieDone | boolean |  | No |
| splitWith | string |  | No |
| topicId | string |  | No |
| tourPage | integer |  | No |
| traceId | string |  | No |
| transactionId | string |  | No |
| type | string |  | No |
| url | string |  | No |
| userId | string |  | No |
| videoErrorReason | string |  | No |

<a name="impression"></a>**Impression**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="impressionEvent"></a>**ImpressionEvent**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [Data](#data) |  | No |
| name | string |  | No |
| timestamp | string |  | No |

<a name="addStripeCardRequest"></a>**AddStripeCardRequest**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountId | string |  | No |
| iin | string |  | No |
| save | boolean |  | No |
| stripeToken | string |  | No |

<a name="apiStripeCard"></a>**ApiStripeCard**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| brand | string |  | No |
| endDate | string |  | No |
| funding | string |  | No |
| lastFour | string |  | No |
| stripeCardId | string |  | No |

<a name="apiStripeCards"></a>**ApiStripeCards**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cards | [ [ApiStripeCard](#apiStripeCard) ] |  | No |

<a name="apiThreeDsResponse"></a>**ApiThreeDsResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| decision | string |  | No |
| redirectUrl | string |  | No |
| required | boolean |  | No |
| status | string |  | No |
| stripeSource | string |  | No |

<a name="apiTopUpLimits"></a>**ApiTopUpLimits**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| maxLoad | float |  | No |
| minLoad | float |  | No |

<a name="threeDSecureRequest"></a>**ThreeDSecureRequest**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountId | string |  | No |
| amount | long |  | No |
| currency | string |  | No |
| isInitial | boolean |  | No |
| returnUrl | string |  | No |
| stripeCardId | string |  | No |

<a name="topUpRequest"></a>**TopUpRequest**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountId | string |  | No |
| amount | long |  | No |
| currency | string |  | No |
| isInitial | boolean |  | No |
| stripeSource | string |  | No |
| threeDSecureDecision | string |  | No |