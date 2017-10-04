Monzo Undocumented API
======================


**Version:** 1.0.0


### /account-settings
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### ***PUT***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| magstripe_atm_enabled | formData |  | No | boolean |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /accounts
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_type | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /api/v2/incidents/unresolved.json
---
##### ***GET***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /balance/limits
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /card-activation/activate
---
##### ***POST***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /card-replacement/activate
---
##### ***POST***
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

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /card/list
---
##### ***GET***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /contact-discovery/query
---
##### ***GET***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |
| start_time | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /feed/{id}
---
##### ***DELETE***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /geocode/postal-code-lookup
---
##### ***GET***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /help/content/categories/{id}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /help/content/search
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| q | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /help/content/trending
---
##### ***GET***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| intercom_app_id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /kyc/register
---
##### ***POST***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /oauth2/authorize
---
##### ***POST***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| grant_type | formData |  | No | string |
| code | formData |  | No | string |
| redirect_uri | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /p2p/recipients
---
##### ***POST***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| date_of_birth | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /pin/sms_blocked
---
##### ***GET***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### ***PUT***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | formData |  | No | string |
| stripe_token | formData |  | No | string |
| iin | formData |  | No | string |
| save | formData |  | No | boolean |
| idempotency_key | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /stripe/three_d_secure
---
##### ***POST***
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

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /stripe/top_up
---
##### ***POST***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_id | query |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /topup/status
---
##### ***GET***
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
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| transaction_id | path |  | Yes | string |
| category | formData |  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /user-settings
---
##### ***PUT***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| p2p_enabled | formData |  | No | boolean |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /waitlist
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /waitlist/signup
---
##### ***POST***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

