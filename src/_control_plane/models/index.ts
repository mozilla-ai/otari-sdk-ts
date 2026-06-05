/* tslint:disable */
/* eslint-disable */
/**
 * Response model for budget information.
 * @export
 * @interface BudgetResponse
 */
export interface BudgetResponse {
    /**
     * 
     * @type {number}
     * @memberof BudgetResponse
     */
    budgetDurationSec: number | null;
    /**
     * 
     * @type {string}
     * @memberof BudgetResponse
     */
    budgetId: string;
    /**
     * 
     * @type {string}
     * @memberof BudgetResponse
     */
    createdAt: string;
    /**
     * 
     * @type {number}
     * @memberof BudgetResponse
     */
    maxBudget: number | null;
    /**
     * 
     * @type {string}
     * @memberof BudgetResponse
     */
    updatedAt: string;
}
/**
 * Request model for creating a new budget.
 * @export
 * @interface CreateBudgetRequest
 */
export interface CreateBudgetRequest {
    /**
     * Budget duration in seconds (e.g., 86400 for daily, 604800 for weekly)
     * @type {number}
     * @memberof CreateBudgetRequest
     */
    budgetDurationSec?: number | null;
    /**
     * Maximum spending limit
     * @type {number}
     * @memberof CreateBudgetRequest
     */
    maxBudget?: number | null;
}
/**
 * Request model for creating a new API key.
 * @export
 * @interface CreateKeyRequest
 */
export interface CreateKeyRequest {
    /**
     * Optional expiration timestamp
     * @type {Date}
     * @memberof CreateKeyRequest
     */
    expiresAt?: Date | null;
    /**
     * Optional name for the key
     * @type {string}
     * @memberof CreateKeyRequest
     */
    keyName?: string | null;
    /**
     * Optional metadata
     * @type {{ [key: string]: any; }}
     * @memberof CreateKeyRequest
     */
    metadata?: { [key: string]: any; };
    /**
     * Optional user ID to associate with this key
     * @type {string}
     * @memberof CreateKeyRequest
     */
    userId?: string | null;
}
/**
 * Response model for creating a new API key.
 * @export
 * @interface CreateKeyResponse
 */
export interface CreateKeyResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateKeyResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CreateKeyResponse
     */
    expiresAt: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateKeyResponse
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateKeyResponse
     */
    isActive: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateKeyResponse
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof CreateKeyResponse
     */
    keyName: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CreateKeyResponse
     */
    metadata: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof CreateKeyResponse
     */
    userId: string | null;
}
/**
 * Request model for creating a new user.
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * Optional admin-facing alias
     * @type {string}
     * @memberof CreateUserRequest
     */
    alias?: string | null;
    /**
     * Whether user is blocked
     * @type {boolean}
     * @memberof CreateUserRequest
     */
    blocked?: boolean;
    /**
     * Optional budget ID
     * @type {string}
     * @memberof CreateUserRequest
     */
    budgetId?: string | null;
    /**
     * Optional metadata
     * @type {{ [key: string]: any; }}
     * @memberof CreateUserRequest
     */
    metadata?: { [key: string]: any; };
    /**
     * Unique user identifier
     * @type {string}
     * @memberof CreateUserRequest
     */
    userId: string;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}
/**
 * Response model for key information.
 * @export
 * @interface KeyInfo
 */
export interface KeyInfo {
    /**
     * 
     * @type {string}
     * @memberof KeyInfo
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof KeyInfo
     */
    expiresAt: string | null;
    /**
     * 
     * @type {string}
     * @memberof KeyInfo
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof KeyInfo
     */
    isActive: boolean;
    /**
     * 
     * @type {string}
     * @memberof KeyInfo
     */
    keyName: string | null;
    /**
     * 
     * @type {string}
     * @memberof KeyInfo
     */
    lastUsedAt: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof KeyInfo
     */
    metadata: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof KeyInfo
     */
    userId: string | null;
}
/**
 * 
 * @export
 * @interface LocationInner
 */
export interface LocationInner {
}
/**
 * Response model for model pricing.
 * @export
 * @interface PricingResponse
 */
export interface PricingResponse {
    /**
     * 
     * @type {string}
     * @memberof PricingResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof PricingResponse
     */
    effectiveAt: string;
    /**
     * 
     * @type {number}
     * @memberof PricingResponse
     */
    inputPricePerMillion: number;
    /**
     * 
     * @type {string}
     * @memberof PricingResponse
     */
    modelKey: string;
    /**
     * 
     * @type {number}
     * @memberof PricingResponse
     */
    outputPricePerMillion: number;
    /**
     * 
     * @type {string}
     * @memberof PricingResponse
     */
    updatedAt: string;
}
/**
 * Request model for setting model pricing.
 * @export
 * @interface SetPricingRequest
 */
export interface SetPricingRequest {
    /**
     * ISO 8601 datetime from which this price applies. Defaults to now if omitted.
     * @type {Date}
     * @memberof SetPricingRequest
     */
    effectiveAt?: Date | null;
    /**
     * Price per 1M input tokens
     * @type {number}
     * @memberof SetPricingRequest
     */
    inputPricePerMillion: number;
    /**
     * Model identifier in format 'provider:model'
     * @type {string}
     * @memberof SetPricingRequest
     */
    modelKey: string;
    /**
     * Price per 1M output tokens
     * @type {number}
     * @memberof SetPricingRequest
     */
    outputPricePerMillion: number;
}
/**
 * Request model for updating a budget.
 * @export
 * @interface UpdateBudgetRequest
 */
export interface UpdateBudgetRequest {
    /**
     * 
     * @type {number}
     * @memberof UpdateBudgetRequest
     */
    budgetDurationSec?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateBudgetRequest
     */
    maxBudget?: number | null;
}
/**
 * Request model for updating a key.
 * @export
 * @interface UpdateKeyRequest
 */
export interface UpdateKeyRequest {
    /**
     * 
     * @type {Date}
     * @memberof UpdateKeyRequest
     */
    expiresAt?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateKeyRequest
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateKeyRequest
     */
    keyName?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UpdateKeyRequest
     */
    metadata?: { [key: string]: any; } | null;
}
/**
 * Request model for updating a user.
 * @export
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    alias?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUserRequest
     */
    blocked?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    budgetId?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UpdateUserRequest
     */
    metadata?: { [key: string]: any; } | null;
}
/**
 * A single usage log entry.
 * @export
 * @interface UsageEntry
 */
export interface UsageEntry {
    /**
     * 
     * @type {string}
     * @memberof UsageEntry
     */
    apiKeyId: string | null;
    /**
     * 
     * @type {number}
     * @memberof UsageEntry
     */
    completionTokens: number | null;
    /**
     * 
     * @type {number}
     * @memberof UsageEntry
     */
    cost: number | null;
    /**
     * 
     * @type {string}
     * @memberof UsageEntry
     */
    endpoint: string;
    /**
     * 
     * @type {string}
     * @memberof UsageEntry
     */
    errorMessage: string | null;
    /**
     * 
     * @type {string}
     * @memberof UsageEntry
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UsageEntry
     */
    model: string;
    /**
     * 
     * @type {number}
     * @memberof UsageEntry
     */
    promptTokens: number | null;
    /**
     * 
     * @type {string}
     * @memberof UsageEntry
     */
    provider: string | null;
    /**
     * 
     * @type {string}
     * @memberof UsageEntry
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof UsageEntry
     */
    timestamp: string;
    /**
     * 
     * @type {number}
     * @memberof UsageEntry
     */
    totalTokens: number | null;
    /**
     * 
     * @type {string}
     * @memberof UsageEntry
     */
    userId: string | null;
}
/**
 * Response model for usage log.
 * @export
 * @interface UsageLogResponse
 */
export interface UsageLogResponse {
    /**
     * 
     * @type {string}
     * @memberof UsageLogResponse
     */
    apiKeyId: string | null;
    /**
     * 
     * @type {number}
     * @memberof UsageLogResponse
     */
    completionTokens: number | null;
    /**
     * 
     * @type {number}
     * @memberof UsageLogResponse
     */
    cost: number | null;
    /**
     * 
     * @type {string}
     * @memberof UsageLogResponse
     */
    endpoint: string;
    /**
     * 
     * @type {string}
     * @memberof UsageLogResponse
     */
    errorMessage: string | null;
    /**
     * 
     * @type {string}
     * @memberof UsageLogResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UsageLogResponse
     */
    model: string;
    /**
     * 
     * @type {number}
     * @memberof UsageLogResponse
     */
    promptTokens: number | null;
    /**
     * 
     * @type {string}
     * @memberof UsageLogResponse
     */
    provider: string | null;
    /**
     * 
     * @type {string}
     * @memberof UsageLogResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof UsageLogResponse
     */
    timestamp: string;
    /**
     * 
     * @type {number}
     * @memberof UsageLogResponse
     */
    totalTokens: number | null;
    /**
     * 
     * @type {string}
     * @memberof UsageLogResponse
     */
    userId: string | null;
}
/**
 * Response model for user information.
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    alias: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserResponse
     */
    blocked: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    budgetId: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    budgetStartedAt: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    createdAt: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UserResponse
     */
    metadata: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    nextBudgetResetAt: string | null;
    /**
     * 
     * @type {number}
     * @memberof UserResponse
     */
    reserved: number;
    /**
     * 
     * @type {number}
     * @memberof UserResponse
     */
    spend: number;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    userId: string;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {object}
     * @memberof ValidationError
     */
    ctx?: object;
    /**
     * 
     * @type {any}
     * @memberof ValidationError
     */
    input?: any | null;
    /**
     * 
     * @type {Array<LocationInner>}
     * @memberof ValidationError
     */
    loc: Array<LocationInner>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}
