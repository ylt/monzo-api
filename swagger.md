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

### Models
---

<a name="apiAccount"></a>**ApiAccount**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | number |  | No |
| created | number |  | No |
| description | number |  | No |
| id | number |  | No |
| sortCode | number |  | No |
| type | number |  | No |

<a name="apiAccountSettings"></a>**ApiAccountSettings**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| magstripeAtmEnabled | number |  | No |
| magstripeAtmEnabledFor | number |  | No |

<a name="apiAddress"></a>**ApiAddress**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressId | number |  | No |
| addressLines | number |  | No |
| administrativeArea | number |  | No |
| countryCode | number |  | No |
| postalCode | number |  | No |

<a name="apiAccounts"></a>**ApiAccounts**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accounts | number |  | No |

<a name="apiAttachmentResponse"></a>**ApiAttachmentResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachment | number |  | No |

<a name="apiBalance"></a>**ApiBalance**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | number |  | No |
| currency | number |  | No |
| localSpend | number |  | No |
| spendToday | number |  | No |

<a name="apiBalanceLimits"></a>**ApiBalanceLimits**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| annualCashLimit | number |  | No |
| annualCashLimitTotal | number |  | No |
| annualLoadLimit | number |  | No |
| annualLoadLimitTotal | number |  | No |
| dailyCashLimit | number |  | No |
| dailyCashLimitTotal | number |  | No |
| dailyLoadLimit | number |  | No |
| dailyLoadLimitTotal | number |  | No |
| inboundP2pMax | number |  | No |
| maxBalance | number |  | No |
| maxSingleP2pLimit | number |  | No |
| maxSinglePosLimit | number |  | No |
| monthlyCashLimit | number |  | No |
| monthlyCashLimitTotal | number |  | No |
| monthlyInboundP2pLimit | number |  | No |
| monthlyInboundP2pLimitTotal | number |  | No |
| monthlyLoadLimit | number |  | No |
| monthlyLoadLimitTotal | number |  | No |
| monthlyP2pLimit | number |  | No |
| monthlyP2pLimitTotal | number |  | No |
| verificationType | number |  | No |

<a name="apiCard"></a>**ApiCard**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| expires | number |  | No |
| id | number |  | No |
| lastDigits | number |  | No |
| processorToken | number |  | No |
| replacementOrdered | number |  | No |
| status | number |  | No |

<a name="apiCardDispatchStatus"></a>**ApiCardDispatchStatus**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| estimatedDeliveryDate | number |  | No |
| status | number |  | No |

<a name="apiCardReplacementOrder"></a>**ApiCardReplacementOrder**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| estimatedDeliveryDate | number |  | No |

<a name="apiCardResponse"></a>**ApiCardResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| card | number |  | No |

<a name="apiCardsResponse"></a>**ApiCardsResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cards | number |  | No |

<a name="apiCodeCheckResult"></a>**ApiCodeCheckResult**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isOk | number |  | No |
| reason | number |  | No |

<a name="apiConfig"></a>**ApiConfig**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| featureFlags | number |  | No |
| inboundP2p | number |  | No |
| p2p | number |  | No |
| sddSplashscreen | number |  | No |
| username | number |  | No |
| isIdentityVerificationHelpEnabled | number |  | No |
| enabled | number |  | No |
| max | number |  | No |
| min | number |  | No |
| reason | number |  | No |
| primary | number |  | No |
| status | number |  | No |

<a name="apiContactDiscovery"></a>**ApiContactDiscovery**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| phone | number |  | No |

<a name="apiIntercomToken"></a>**ApiIntercomToken**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| token | number |  | No |

<a name="apiInitialTopupStatus"></a>**ApiInitialTopupStatus**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| topupAmount | number |  | No |
| topupCurrency | number |  | No |
| topupProcessed | number |  | No |

<a name="apiLocalSpend"></a>**ApiLocalSpend**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currency | number |  | No |
| spendToday | number |  | No |

<a name="apiNews"></a>**ApiNews**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| posts | number |  | No |

<a name="apiNewsItem"></a>**ApiNewsItem**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| expires | number |  | No |
| id | number |  | No |
| title | number |  | No |
| uri | number |  | No |

<a name="apiPostcodeResponse"></a>**ApiPostcodeResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| results | number |  | No |

<a name="apiToken"></a>**ApiToken**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accessToken | number |  | No |
| clientId | number |  | No |
| expiresIn | number |  | No |
| refreshToken | number |  | No |
| tokenType | number |  | No |
| userId | number |  | No |

<a name="apiProfile"></a>**ApiProfile**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | number |  | No |
| addressUpdatable | number |  | No |
| dateOfBirth | number |  | No |
| email | number |  | No |
| name | number |  | No |
| phoneNumber | number |  | No |
| preferredName | number |  | No |
| userId | number |  | No |
| userNumber | number |  | No |

<a name="apiTransactionResponse"></a>**ApiTransactionResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| transaction | number |  | No |

<a name="apiUserSettings"></a>**ApiUserSettings**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| p2pEnabled | number |  | No |

<a name="apiWaitlistPosition"></a>**ApiWaitlistPosition**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| after | number |  | No |
| events | number |  | No |
| finished | number |  | No |
| ineligible | number |  | No |
| position | number |  | No |
| referralBump | number |  | No |
| referralLink | number |  | No |
| userId | number |  | No |

<a name="legacyApiAddress"></a>**LegacyApiAddress**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| administrativeArea | number |  | No |
| country | number |  | No |
| locality | number |  | No |
| postalCode | number |  | No |
| streetAddress | number |  | No |

<a name="notificationMessage"></a>**NotificationMessage**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | number |  | No |
| subtitle | number |  | No |
| title | number |  | No |

<a name="verificationType"></a>**VerificationType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| descriptionResId | number |  | No |
| dueDiligenceLevel | number |  | No |

<a name="a"></a>**a**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="b"></a>**b**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="c"></a>**c**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="identity_verificationApiUploadContainer"></a>**identity_verification/ApiUploadContainer**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fileUrl | number |  | No |
| uploadUrl | number |  | No |

<a name="identity_verificationContentType"></a>**identity_verification/ContentType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| mimeType | number |  | No |

<a name="identity_verificationFileUpload"></a>**identity_verification/FileUpload**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fileId | number |  | No |
| uploadUrl | number |  | No |

<a name="identity_verificationFileType"></a>**identity_verification/FileType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| apiValue | number |  | No |

<a name="identity_verificationIdentityDocumentType"></a>**identity_verification/IdentityDocumentType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| apiValue | number |  | No |
| displayNameRes | number |  | No |
| isBackRequired | number |  | No |

<a name="identity_verificationIdentityVerification"></a>**identity_verification/IdentityVerification**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allowPicker | number |  | No |
| allowSystemCamera | number |  | No |
| identityDocUploaded | number |  | No |
| rejectionNote | number |  | No |
| rejectionReasonCode | number |  | No |
| selfieUploaded | number |  | No |
| status | number |  | No |

<a name="identity_verificationLegacyIdTypeCompanionWhenMappings"></a>**identity_verification/LegacyIdType$Companion$WhenMappings**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="identity_verificationLegacyIdType"></a>**identity_verification/LegacyIdType**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type | number |  | No |

<a name="identity_verificationLegacyKycStatusWhenMappings"></a>**identity_verification/LegacyKyc$Status$WhenMappings**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="identity_verificationLegacyKyc"></a>**identity_verification/LegacyKyc**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| evidenceReviewed | number |  | No |
| evidenceSubmitted | number |  | No |
| status | number |  | No |

<a name="feedApiAttachment"></a>**feed/ApiAttachment**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| created | number |  | No |
| externalId | number |  | No |
| fileUrl | number |  | No |
| id | number |  | No |

<a name="feedApiCounterparty"></a>**feed/ApiCounterparty**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | number |  | No |
| name | number |  | No |
| number | number |  | No |
| sortCode | number |  | No |
| userId | number |  | No |

<a name="feedApiFeedItem"></a>**feed/ApiFeedItem**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appUri | number |  | No |
| created | number |  | No |
| externalId | number |  | No |
| id | number |  | No |
| isDismissable | number |  | No |
| params | number |  | No |
| transaction | number |  | No |
| type | number |  | No |
| amount | number |  | No |
| body | number |  | No |
| currency | number |  | No |
| imageUrl | number |  | No |
| intervalEnd | number |  | No |
| intervalStart | number |  | No |
| intervalType | number |  | No |
| kycRejectedCustomerMessage | number |  | No |
| kycRejectedReason | number |  | No |
| sddMigrationRejectionNote | number |  | No |
| ticketId | number |  | No |
| title | number |  | No |

<a name="feedApiFeedResponse"></a>**feed/ApiFeedResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| items | number |  | No |

<a name="feedApiMerchant"></a>**feed/ApiMerchant**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | number |  | No |
| atm | number |  | No |
| category | number |  | No |
| description | number |  | No |
| emoji | number |  | No |
| groupId | number |  | No |
| id | number |  | No |
| logo | number |  | No |
| name | number |  | No |
| online | number |  | No |

<a name="feedApiMerchantAddress"></a>**feed/ApiMerchantAddress**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| formatted | number |  | No |
| latitude | number |  | No |
| longitude | number |  | No |
| shortFormatted | number |  | No |

<a name="feedApiMetadata"></a>**feed/ApiMetadata**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bacsDirectDebitInstructionId | number |  | No |
| hideAmount | number |  | No |
| inboundP2pId | number |  | No |
| notes | number |  | No |

<a name="feedApiTransaction"></a>**feed/ApiTransaction**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| attachments | number |  | No |
| category | number |  | No |
| counterparty | number |  | No |
| created | number |  | No |
| currency | number |  | No |
| declineReason | number |  | No |
| description | number |  | No |
| id | number |  | No |
| includeInSpending | number |  | No |
| isLoad | number |  | No |
| localAmount | number |  | No |
| localCurrency | number |  | No |
| merchant | number |  | No |
| metadata | number |  | No |
| scheme | number |  | No |
| settled | number |  | No |
| updated | number |  | No |

<a name="helpAction"></a>**help/Action**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| params | number |  | No |
| title | number |  | No |
| type | number |  | No |
| url | number |  | No |

<a name="helpContent"></a>**help/Content**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sections | number |  | No |

<a name="helpSearchQuery"></a>**help/SearchQuery**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| model | number |  | No |
| query | number |  | No |
| sections | number |  | No |

<a name="helpSection"></a>**help/Section**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| title | number |  | No |
| topics | number |  | No |

<a name="helpTopic"></a>**help/Topic**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actions | number |  | No |
| content | number |  | No |
| id | number |  | No |
| title | number |  | No |

<a name="pinApiPinSms"></a>**pin/ApiPinSms**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| smsBlocked | number |  | No |

<a name="pina"></a>**pin/a**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| prefix | number |  | No |

<a name="service_statusServiceStatus"></a>**service_status/ServiceStatus**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| incidents | number |  | No |

<a name="service_statusServiceStatusIncident"></a>**service_status/ServiceStatusIncident**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | number |  | No |
| impact | number |  | No |
| name | number |  | No |
| shortlink | number |  | No |
| status | number |  | No |

<a name="sign_upSignUpSource"></a>**sign_up/SignUpSource**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| apiValue | number |  | No |

<a name="topupAddStripeCardRequest"></a>**topup/AddStripeCardRequest**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountId | number |  | No |
| iin | number |  | No |
| save | number |  | No |
| stripeToken | number |  | No |

<a name="topupApiStripeCard"></a>**topup/ApiStripeCard**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| brand | number |  | No |
| endDate | number |  | No |
| funding | number |  | No |
| lastFour | number |  | No |
| stripeCardId | number |  | No |

<a name="topupApiStripeCards"></a>**topup/ApiStripeCards**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cards | number |  | No |

<a name="topupApiThreeDsResponse"></a>**topup/ApiThreeDsResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| decision | number |  | No |
| redirectUrl | number |  | No |
| required | number |  | No |
| status | number |  | No |
| stripeSource | number |  | No |

<a name="topupApiTopUpLimits"></a>**topup/ApiTopUpLimits**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| maxLoad | object |  | No |
| minLoad | object |  | No |

<a name="topupThreeDSecureRequest"></a>**topup/ThreeDSecureRequest**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountId | number |  | No |
| amount | number |  | No |
| currency | number |  | No |
| isInitial | number |  | No |
| returnUrl | number |  | No |
| stripeCardId | number |  | No |

<a name="topupTopUpRequest"></a>**topup/TopUpRequest**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountId | number |  | No |
| amount | number |  | No |
| currency | number |  | No |
| isInitial | number |  | No |
| stripeSource | number |  | No |
| threeDSecureDecision | number |  | No |

<a name="trackingData"></a>**tracking/Data**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| activeNotifications | number |  | No |
| amount | number |  | No |
| androidPayEnabled | number |  | No |
| apiErrorCode | number |  | No |
| apiErrorMessage | number |  | No |
| apiStatusCode | number |  | No |
| appShortcutType | number |  | No |
| authenticate | number |  | No |
| cameFrom | number |  | No |
| category | number |  | No |
| contacts | number |  | No |
| contactsOnMonzo | number |  | No |
| description | number |  | No |
| diligence | number |  | No |
| docDone | number |  | No |
| docType | number |  | No |
| eligible | number |  | No |
| enabled | number |  | No |
| errorType | number |  | No |
| fallback | number |  | No |
| feedback | number |  | No |
| fingerprintAuth | number |  | No |
| firstSampleDelta | number |  | No |
| firstTime | number |  | No |
| from | number |  | No |
| gpsAdid | number |  | No |
| granted | number |  | No |
| kycRejected | number |  | No |
| logoutReason | number |  | No |
| memoryError | number |  | No |
| method | number |  | No |
| month | number |  | No |
| newCategory | number |  | No |
| nfcEnabled | number |  | No |
| notificationSubType | number |  | No |
| notificationType | number |  | No |
| oldCategory | number |  | No |
| openedFrom | number |  | No |
| optedIn | number |  | No |
| outcome | number |  | No |
| path | number |  | No |
| redirectId | number |  | No |
| referrer | number |  | No |
| reportMonth | number |  | No |
| sampleError | number |  | No |
| secondSampleDelta | number |  | No |
| selfieDone | number |  | No |
| splitWith | number |  | No |
| topicId | number |  | No |
| tourPage | number |  | No |
| traceId | number |  | No |
| transactionId | number |  | No |
| type | number |  | No |
| url | number |  | No |
| userId | number |  | No |
| videoErrorReason | number |  | No |

<a name="trackingImpression"></a>**tracking/Impression**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| events | number |  | No |
| value | number |  | No |

<a name="trackingImpressionEvent"></a>**tracking/ImpressionEvent**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | number |  | No |
| name | number |  | No |
| timestamp | number |  | No |

<a name="trackinga"></a>**tracking/a**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

<a name="apiGoldenTicket"></a>**ApiGoldenTicket**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| shortUri | number |  | No |
| status | number |  | No |
| ticketId | number |  | No |
| uri | number |  | No |
| apiValue | number |  | No |