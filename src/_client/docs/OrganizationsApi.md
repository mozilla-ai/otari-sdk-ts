# OrganizationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acceptCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdAcceptPost**](OrganizationsApi.md#acceptcallerpendingmembershipv1organizationsmependingmembershipsorganizationmemberidacceptpost) | **POST** /v1/organizations/me/pending-memberships/{organization_member_id}/accept | Accept Caller Pending Membership |
| [**createActiveOrganizationDomainV1OrganizationsMeDomainsPost**](OrganizationsApi.md#createactiveorganizationdomainv1organizationsmedomainspost) | **POST** /v1/organizations/me/domains | Create Active Organization Domain |
| [**createActiveOrganizationMemberV1OrganizationsMeMembersPost**](OrganizationsApi.md#createactiveorganizationmemberv1organizationsmememberspost) | **POST** /v1/organizations/me/members | Create Active Organization Member |
| [**createOrganizationV1OrganizationsPost**](OrganizationsApi.md#createorganizationv1organizationspost) | **POST** /v1/organizations | Create Organization |
| [**declineCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdDeclinePost**](OrganizationsApi.md#declinecallerpendingmembershipv1organizationsmependingmembershipsorganizationmemberiddeclinepost) | **POST** /v1/organizations/me/pending-memberships/{organization_member_id}/decline | Decline Caller Pending Membership |
| [**deleteActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdDelete**](OrganizationsApi.md#deleteactiveorganizationdomainv1organizationsmedomainsorganizationdomainiddelete) | **DELETE** /v1/organizations/me/domains/{organization_domain_id} | Delete Active Organization Domain |
| [**getActiveOrganizationContextV1OrganizationsMeGet**](OrganizationsApi.md#getactiveorganizationcontextv1organizationsmeget) | **GET** /v1/organizations/me | Get Active Organization Context |
| [**inviteActiveOrganizationMemberV1OrganizationsMeMemberInvitationsPost**](OrganizationsApi.md#inviteactiveorganizationmemberv1organizationsmememberinvitationspost) | **POST** /v1/organizations/me/member-invitations | Invite Active Organization Member |
| [**listActiveOrganizationDomainsV1OrganizationsMeDomainsGet**](OrganizationsApi.md#listactiveorganizationdomainsv1organizationsmedomainsget) | **GET** /v1/organizations/me/domains | List Active Organization Domains |
| [**listActiveOrganizationMembersV1OrganizationsMeMembersGet**](OrganizationsApi.md#listactiveorganizationmembersv1organizationsmemembersget) | **GET** /v1/organizations/me/members | List Active Organization Members |
| [**listCallerOrganizationMembershipsV1OrganizationsMeMembershipsGet**](OrganizationsApi.md#listcallerorganizationmembershipsv1organizationsmemembershipsget) | **GET** /v1/organizations/me/memberships | List Caller Organization Memberships |
| [**listCallerPendingMembershipsV1OrganizationsMePendingMembershipsGet**](OrganizationsApi.md#listcallerpendingmembershipsv1organizationsmependingmembershipsget) | **GET** /v1/organizations/me/pending-memberships | List Caller Pending Memberships |
| [**removeActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdDelete**](OrganizationsApi.md#removeactiveorganizationmemberv1organizationsmemembersorganizationmemberiddelete) | **DELETE** /v1/organizations/me/members/{organization_member_id} | Remove Active Organization Member |
| [**revokeActiveOrganizationMemberInvitationV1OrganizationsMeMemberInvitationsInvitationIdDelete**](OrganizationsApi.md#revokeactiveorganizationmemberinvitationv1organizationsmememberinvitationsinvitationiddelete) | **DELETE** /v1/organizations/me/member-invitations/{invitation_id} | Revoke Active Organization Member Invitation |
| [**switchActiveOrganizationV1OrganizationsMeSwitchPost**](OrganizationsApi.md#switchactiveorganizationv1organizationsmeswitchpost) | **POST** /v1/organizations/me/switch | Switch Active Organization |
| [**updateActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdPatch**](OrganizationsApi.md#updateactiveorganizationdomainv1organizationsmedomainsorganizationdomainidpatch) | **PATCH** /v1/organizations/me/domains/{organization_domain_id} | Update Active Organization Domain |
| [**updateActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdPatch**](OrganizationsApi.md#updateactiveorganizationmemberv1organizationsmemembersorganizationmemberidpatch) | **PATCH** /v1/organizations/me/members/{organization_member_id} | Update Active Organization Member |
| [**updateActiveOrganizationV1OrganizationsMePatch**](OrganizationsApi.md#updateactiveorganizationv1organizationsmepatch) | **PATCH** /v1/organizations/me | Update Active Organization |
| [**verifyActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdVerifyPost**](OrganizationsApi.md#verifyactiveorganizationdomainv1organizationsmedomainsorganizationdomainidverifypost) | **POST** /v1/organizations/me/domains/{organization_domain_id}/verify | Verify Active Organization Domain |



## acceptCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdAcceptPost

> AcceptInvitationResultPublic acceptCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdAcceptPost(organizationMemberId)

Accept Caller Pending Membership

Accept an invitation addressed to the caller, resolving it to an active membership.  Does the same work as &#x60;&#x60;POST /v1/invitations/accept&#x60;&#x60;, including the workspace assignments parked at invite time, and answers the same shape. Addressed by membership id rather than by token: the caller is already the addressee, so a token would add nothing their session does not carry.  Idempotent for any membership the caller already holds &#x60;&#x60;active&#x60;&#x60;, which is what two clicks before the list refreshes produces: it answers that membership\&#39;s organization and role rather than a 404 for an action that worked. Deliberately not narrowed to memberships that got there by accepting, which would cost a lookup to tell the two apart and answer a caller nothing they cannot already read from &#x60;&#x60;GET /me/memberships&#x60;&#x60;.  Answers 404 for a membership that is not the caller\&#39;s own, whether or not it exists, and for one of theirs that is neither &#x60;&#x60;active&#x60;&#x60; nor holding an invitation. An invitation that has lapsed answers 400.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { AcceptCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdAcceptPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // string
    organizationMemberId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies AcceptCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdAcceptPostRequest;

  try {
    const data = await api.acceptCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdAcceptPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationMemberId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AcceptInvitationResultPublic**](AcceptInvitationResultPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createActiveOrganizationDomainV1OrganizationsMeDomainsPost

> OrganizationDomainPublic createActiveOrganizationDomainV1OrganizationsMeDomainsPost(organizationDomainCreateRequest)

Create Active Organization Domain

Claim an email domain for the caller\&#39;s organization. Owners and admins only.  The claim lands unverified and does nothing until &#x60;&#x60;POST /me/domains/{id}/verify&#x60;&#x60; finds the record in &#x60;&#x60;verification_record&#x60;&#x60; published at the domain\&#39;s apex. A public email provider is refused outright, and a domain another organization already claims answers 409 without saying who holds it.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { CreateActiveOrganizationDomainV1OrganizationsMeDomainsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // OrganizationDomainCreateRequest
    organizationDomainCreateRequest: ...,
  } satisfies CreateActiveOrganizationDomainV1OrganizationsMeDomainsPostRequest;

  try {
    const data = await api.createActiveOrganizationDomainV1OrganizationsMeDomainsPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationDomainCreateRequest** | [OrganizationDomainCreateRequest](OrganizationDomainCreateRequest.md) |  | |

### Return type

[**OrganizationDomainPublic**](OrganizationDomainPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createActiveOrganizationMemberV1OrganizationsMeMembersPost

> ActiveOrganizationMemberCreateResultPublic createActiveOrganizationMemberV1OrganizationsMeMembersPost(activeOrganizationMemberCreateRequest)

Create Active Organization Member

Add a member to the caller\&#39;s active organization, by email address.  Organization owners and admins only. The member is active immediately and the response says so: this edition has no invitation to send and no way to accept one, so it answers on the &#x60;&#x60;active&#x60;&#x60; arm of the result rather than the &#x60;&#x60;invited&#x60;&#x60; one the platform uses. An address that belongs to no identity yet creates one, which carries the address as the handle a future sign-in flow will claim it by, and can do nothing until then.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { CreateActiveOrganizationMemberV1OrganizationsMeMembersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // ActiveOrganizationMemberCreateRequest
    activeOrganizationMemberCreateRequest: ...,
  } satisfies CreateActiveOrganizationMemberV1OrganizationsMeMembersPostRequest;

  try {
    const data = await api.createActiveOrganizationMemberV1OrganizationsMeMembersPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **activeOrganizationMemberCreateRequest** | [ActiveOrganizationMemberCreateRequest](ActiveOrganizationMemberCreateRequest.md) |  | |

### Return type

[**ActiveOrganizationMemberCreateResultPublic**](ActiveOrganizationMemberCreateResultPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createOrganizationV1OrganizationsPost

> OrganizationPublic createOrganizationV1OrganizationsPost(organizationCreateRequest)

Create Organization

Create an organization with the caller as its owner.  Takes a name; the slug is derived from it with a random suffix, so two organizations may share a name and a later rename does not move the slug. A default workspace is provisioned alongside, because an organization without one has nowhere to hold a key, a budget or a usage row.  The caller is **not** moved into it. Switching is a separate call (&#x60;&#x60;POST /me/switch&#x60;&#x60;), so creating an organization does not change what the rest of the caller\&#39;s session is looking at.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { CreateOrganizationV1OrganizationsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // OrganizationCreateRequest
    organizationCreateRequest: ...,
  } satisfies CreateOrganizationV1OrganizationsPostRequest;

  try {
    const data = await api.createOrganizationV1OrganizationsPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationCreateRequest** | [OrganizationCreateRequest](OrganizationCreateRequest.md) |  | |

### Return type

[**OrganizationPublic**](OrganizationPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## declineCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdDeclinePost

> Message declineCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdDeclinePost(organizationMemberId)

Decline Caller Pending Membership

Decline an invitation addressed to the caller.  Lands the pair where a revoke does: the invitation cancelled and the membership suspended rather than deleted, which is what stops the emailed link from later reviving a declined invitation. A future invite to the same address revives the membership.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { DeclineCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdDeclinePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // string
    organizationMemberId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeclineCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdDeclinePostRequest;

  try {
    const data = await api.declineCallerPendingMembershipV1OrganizationsMePendingMembershipsOrganizationMemberIdDeclinePost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationMemberId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Message**](Message.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdDelete

> Message deleteActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdDelete(organizationDomainId)

Delete Active Organization Domain

Drop an email-domain claim. Owners and admins only.  Members who already joined through it keep their membership: they are colleagues by then, not an artifact of the claim.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { DeleteActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // string
    organizationDomainId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdDeleteRequest;

  try {
    const data = await api.deleteActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationDomainId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Message**](Message.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getActiveOrganizationContextV1OrganizationsMeGet

> OrganizationMembershipContextPublic getActiveOrganizationContextV1OrganizationsMeGet()

Get Active Organization Context

Get the caller\&#39;s active organization and their standing in it.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { GetActiveOrganizationContextV1OrganizationsMeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  try {
    const data = await api.getActiveOrganizationContextV1OrganizationsMeGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OrganizationMembershipContextPublic**](OrganizationMembershipContextPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## inviteActiveOrganizationMemberV1OrganizationsMeMemberInvitationsPost

> InviteOrganizationMemberResultPublic inviteActiveOrganizationMemberV1OrganizationsMeMemberInvitationsPost(inviteOrganizationMemberRequest)

Invite Active Organization Member

Invite an address to the caller\&#39;s active organization by email.  Organization owners and admins only. Unlike &#x60;&#x60;POST /me/members&#x60;&#x60;, the membership lands &#x60;&#x60;invited&#x60;&#x60; rather than &#x60;&#x60;active&#x60;&#x60;: it becomes active once the recipient accepts (&#x60;&#x60;POST /v1/invitations/accept&#x60;&#x60;). The response always carries the accept link, whether or not it was actually emailed (&#x60;&#x60;mail_sent&#x60;&#x60;), so an operator can share it themselves when mail is not configured or the send fails.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { InviteActiveOrganizationMemberV1OrganizationsMeMemberInvitationsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // InviteOrganizationMemberRequest
    inviteOrganizationMemberRequest: ...,
  } satisfies InviteActiveOrganizationMemberV1OrganizationsMeMemberInvitationsPostRequest;

  try {
    const data = await api.inviteActiveOrganizationMemberV1OrganizationsMeMemberInvitationsPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **inviteOrganizationMemberRequest** | [InviteOrganizationMemberRequest](InviteOrganizationMemberRequest.md) |  | |

### Return type

[**InviteOrganizationMemberResultPublic**](InviteOrganizationMemberResultPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listActiveOrganizationDomainsV1OrganizationsMeDomainsGet

> OrganizationDomainsPublic listActiveOrganizationDomainsV1OrganizationsMeDomainsGet()

List Active Organization Domains

List the caller\&#39;s organization\&#39;s email-domain claims. Owners and admins only.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { ListActiveOrganizationDomainsV1OrganizationsMeDomainsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  try {
    const data = await api.listActiveOrganizationDomainsV1OrganizationsMeDomainsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OrganizationDomainsPublic**](OrganizationDomainsPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listActiveOrganizationMembersV1OrganizationsMeMembersGet

> ActiveOrganizationMembersPublic listActiveOrganizationMembersV1OrganizationsMeMembersGet(skip, limit)

List Active Organization Members

List the members of the caller\&#39;s active organization.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { ListActiveOrganizationMembersV1OrganizationsMeMembersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ListActiveOrganizationMembersV1OrganizationsMeMembersGetRequest;

  try {
    const data = await api.listActiveOrganizationMembersV1OrganizationsMeMembersGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**ActiveOrganizationMembersPublic**](ActiveOrganizationMembersPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCallerOrganizationMembershipsV1OrganizationsMeMembershipsGet

> CallerOrganizationMembershipsPublic listCallerOrganizationMembershipsV1OrganizationsMeMembershipsGet(skip, limit)

List Caller Organization Memberships

List the organizations the caller belongs to, and their role in each.  The caller\&#39;s own active memberships, not a directory of the deployment\&#39;s organizations: this is what an organization switcher renders, and one row carries &#x60;&#x60;is_active_organization&#x60;&#x60; so it can mark the current one. Not to be confused with &#x60;&#x60;GET /me/members&#x60;&#x60;, which is the active organization\&#39;s roster.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { ListCallerOrganizationMembershipsV1OrganizationsMeMembershipsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ListCallerOrganizationMembershipsV1OrganizationsMeMembershipsGetRequest;

  try {
    const data = await api.listCallerOrganizationMembershipsV1OrganizationsMeMembershipsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**CallerOrganizationMembershipsPublic**](CallerOrganizationMembershipsPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCallerPendingMembershipsV1OrganizationsMePendingMembershipsGet

> PendingOrganizationInvitationsPublic listCallerPendingMembershipsV1OrganizationsMePendingMembershipsGet(skip, limit)

List Caller Pending Memberships

List the organization invitations still awaiting the caller.  The invitee\&#39;s side of the invitation flow, where &#x60;&#x60;/me/member-invitations&#x60;&#x60; is the admin\&#39;s. Not to be confused with &#x60;&#x60;GET /me/memberships&#x60;&#x60;, which lists the organizations the caller is already an active member of and deliberately omits an &#x60;&#x60;invited&#x60;&#x60; one.  Takes no token, unlike &#x60;&#x60;/v1/invitations/_*&#x60;&#x60;: those are public because the recipient of an emailed link holds nothing else to prove anything with, while this caller is authenticated as the addressee and the membership\&#39;s own &#x60;&#x60;user_id&#x60;&#x60; is what scopes the answer. An invitation whose deadline has passed is omitted rather than listed as unactionable.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { ListCallerPendingMembershipsV1OrganizationsMePendingMembershipsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ListCallerPendingMembershipsV1OrganizationsMePendingMembershipsGetRequest;

  try {
    const data = await api.listCallerPendingMembershipsV1OrganizationsMePendingMembershipsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**PendingOrganizationInvitationsPublic**](PendingOrganizationInvitationsPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdDelete

> Message removeActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdDelete(organizationMemberId)

Remove Active Organization Member

Remove a member by suspending their membership, keeping their history resolvable.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { RemoveActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // string
    organizationMemberId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RemoveActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdDeleteRequest;

  try {
    const data = await api.removeActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationMemberId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Message**](Message.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeActiveOrganizationMemberInvitationV1OrganizationsMeMemberInvitationsInvitationIdDelete

> Message revokeActiveOrganizationMemberInvitationV1OrganizationsMeMemberInvitationsInvitationIdDelete(invitationId)

Revoke Active Organization Member Invitation

Revoke an unaccepted invitation. Organization owners and admins only.  Suspends the paired membership rather than deleting it, the same as removing an active member: re-inviting the same address later revives it.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { RevokeActiveOrganizationMemberInvitationV1OrganizationsMeMemberInvitationsInvitationIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // string
    invitationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RevokeActiveOrganizationMemberInvitationV1OrganizationsMeMemberInvitationsInvitationIdDeleteRequest;

  try {
    const data = await api.revokeActiveOrganizationMemberInvitationV1OrganizationsMeMemberInvitationsInvitationIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **invitationId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Message**](Message.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## switchActiveOrganizationV1OrganizationsMeSwitchPost

> OrganizationMembershipContextPublic switchActiveOrganizationV1OrganizationsMeSwitchPost(switchActiveOrganizationRequest)

Switch Active Organization

Point the caller\&#39;s identity at another organization they belong to.  Distinct from &#x60;&#x60;PATCH /me&#x60;&#x60;, which renames the organization already active. This changes which organization every later request is scoped to, so workspaces, keys, budgets and usage all follow it. Answers 404 for an organization the caller holds no active membership in, whether or not it exists.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { SwitchActiveOrganizationV1OrganizationsMeSwitchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // SwitchActiveOrganizationRequest
    switchActiveOrganizationRequest: ...,
  } satisfies SwitchActiveOrganizationV1OrganizationsMeSwitchPostRequest;

  try {
    const data = await api.switchActiveOrganizationV1OrganizationsMeSwitchPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **switchActiveOrganizationRequest** | [SwitchActiveOrganizationRequest](SwitchActiveOrganizationRequest.md) |  | |

### Return type

[**OrganizationMembershipContextPublic**](OrganizationMembershipContextPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdPatch

> OrganizationDomainPublic updateActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdPatch(organizationDomainId, organizationDomainUpdateRequest)

Update Active Organization Domain

Change a claim\&#39;s auto-join role or enabled flag. Owners and admins only.  The domain itself and its verification state are not editable: a different domain is a different claim and needs its own proof.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { UpdateActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // string
    organizationDomainId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // OrganizationDomainUpdateRequest
    organizationDomainUpdateRequest: ...,
  } satisfies UpdateActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdPatchRequest;

  try {
    const data = await api.updateActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdPatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationDomainId** | `string` |  | [Defaults to `undefined`] |
| **organizationDomainUpdateRequest** | [OrganizationDomainUpdateRequest](OrganizationDomainUpdateRequest.md) |  | |

### Return type

[**OrganizationDomainPublic**](OrganizationDomainPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdPatch

> ActiveOrganizationMemberPublic updateActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdPatch(organizationMemberId, activeOrganizationMemberUpdateRequest)

Update Active Organization Member

Change a member\&#39;s role or status. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { UpdateActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // string
    organizationMemberId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ActiveOrganizationMemberUpdateRequest
    activeOrganizationMemberUpdateRequest: ...,
  } satisfies UpdateActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdPatchRequest;

  try {
    const data = await api.updateActiveOrganizationMemberV1OrganizationsMeMembersOrganizationMemberIdPatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationMemberId** | `string` |  | [Defaults to `undefined`] |
| **activeOrganizationMemberUpdateRequest** | [ActiveOrganizationMemberUpdateRequest](ActiveOrganizationMemberUpdateRequest.md) |  | |

### Return type

[**ActiveOrganizationMemberPublic**](ActiveOrganizationMemberPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateActiveOrganizationV1OrganizationsMePatch

> OrganizationMembershipContextPublic updateActiveOrganizationV1OrganizationsMePatch(activeOrganizationUpdateRequest)

Update Active Organization

Rename the caller\&#39;s active organization.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { UpdateActiveOrganizationV1OrganizationsMePatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // ActiveOrganizationUpdateRequest
    activeOrganizationUpdateRequest: ...,
  } satisfies UpdateActiveOrganizationV1OrganizationsMePatchRequest;

  try {
    const data = await api.updateActiveOrganizationV1OrganizationsMePatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **activeOrganizationUpdateRequest** | [ActiveOrganizationUpdateRequest](ActiveOrganizationUpdateRequest.md) |  | |

### Return type

[**OrganizationMembershipContextPublic**](OrganizationMembershipContextPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdVerifyPost

> OrganizationDomainPublic verifyActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdVerifyPost(organizationDomainId)

Verify Active Organization Domain

Prove control of a claimed domain via its DNS TXT record. Owners and admins only.  Idempotent, and answers 400 while the record is not visible yet, which is the expected answer straight after publishing one.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '';
import type { VerifyActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdVerifyPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationsApi(config);

  const body = {
    // string
    organizationDomainId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies VerifyActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdVerifyPostRequest;

  try {
    const data = await api.verifyActiveOrganizationDomainV1OrganizationsMeDomainsOrganizationDomainIdVerifyPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationDomainId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrganizationDomainPublic**](OrganizationDomainPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

