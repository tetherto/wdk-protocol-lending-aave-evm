export default class AaveProtocolEvm extends LendingProtocol {
    /**
     * Creates a new read-only interface to the aave protocol for evm blockchains.
     *
     * @overload
     * @param {WalletAccountReadOnlyEvm | WalletAccountReadOnlyEvmErc4337} account - The wallet account to use to interact with the protocol.
     */
    constructor(account: WalletAccountReadOnlyEvm | WalletAccountReadOnlyEvmErc4337);
    /**
     * Creates a new interface to the aave protocol for evm blockchains.
     *
     * @overload
     * @param {WalletAccountEvm | WalletAccountEvmErc4337} account - The wallet account to use to interact with the protocol.
     */
    constructor(account: WalletAccountEvm | WalletAccountEvmErc4337);
    /** @private */
    private _chainId;
    /** @private */
    private _addressMap;
    /** @private */
    private _poolContract;
    /** @private */
    private _uiPoolDataProviderContract;
    /** @private */
    private _provider;
    /**
     * Supplies a specific token amount to the lending pool.
     * 
     * Users must first approve the necessary amount of tokens to the aave protocol using the {@link WalletAccountEvm#approve} or the {@link WalletAccountEvmErc4337#approve} method.
     *
     * @param {SupplyOptions} options - The supply's options.
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<SupplyResult>} The supply's result.
     */
    supply(options: SupplyOptions, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<SupplyResult>;
    /**
     * Quotes the costs of a supply operation.
     * 
     * Users must first approve the necessary amount of tokens to the aave protocol using the {@link WalletAccountEvm#approve} or the {@link WalletAccountEvmErc4337#approve} method.
     *
     * @param {SupplyOptions} options - The supply's options.
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<Omit<SupplyResult, 'hash'>>} The supply's costs.
     */
    quoteSupply(options: SupplyOptions, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<Omit<SupplyResult, "hash">>;
    /** @private */
    private _getSupplyTransaction;
    /**
     * Withdraws a specific token amount from the pool.
     *
     * @param {WithdrawOptions} options - The withdraw's options.
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<WithdrawResult>} The withdraw's result.
     */
    withdraw(options: WithdrawOptions, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<WithdrawResult>;
    /**
     * Quotes the costs of a withdraw operation.
     *
     * @param {WithdrawOptions} options - The withdraw's options.
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<Omit<WithdrawResult, 'hash'>>} The withdraw's result.
     */
    quoteWithdraw(options: WithdrawOptions, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<Omit<WithdrawResult, "hash">>;
    /** @private */
    private _getWithdrawTransaction;
    /**
     * Borrows a specific token amount.
     *
     * @param {BorrowOptions} options - The borrow's options.
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<BorrowResult>} The borrow's result.
     */
    borrow(options: BorrowOptions, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<BorrowResult>;
    /**
     * Quotes the costs of a borrow operation.
     *
     * @param {BorrowOptions} options - The borrow's options.
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<Omit<BorrowResult, 'hash'>>} The borrow's result.
     */
    quoteBorrow(options: BorrowOptions, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<Omit<BorrowResult, "hash">>;
    /** @private */
    private _getBorrowTransaction;
    /**
     * Repays a specific token amount.
     * 
     * Users must first approve the necessary amount of tokens to the aave protocol using the {@link WalletAccountEvm#approve} or the {@link WalletAccountEvmErc4337#approve} method.
     *
     * @param {RepayOptions} options - The borrow's options,
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<RepayResult>} The repay's result.
     */
    repay(options: RepayOptions, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<RepayResult>;
    /**
     * Quotes the costs of a repay operation.
     * 
     * Users must first approve the necessary amount of tokens to the aave protocol using the {@link WalletAccountEvm#approve} or the {@link WalletAccountEvmErc4337#approve} method.
     *
     * @param {RepayOptions} options - The repay's options.
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<Omit<RepayResult, 'hash'>>} The repay's costs.
     */
    quoteRepay(options: RepayOptions, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<Omit<RepayResult, "hash">>;
    /** @private */
    private _getRepayTransaction;
    /**
     * Enables/disables a specific token as a collateral for the account's borrow operations.
     *
     * @param {string} token - The token's address.
     * @param {boolean} useAsCollateral - True if the token should be a valid collateral.
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<TransactionResult>} The transaction's result.
     */
    setUseReserveAsCollateral(token: string, useAsCollateral: boolean, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<TransactionResult>;
    /**
     * Allows user to use the protocol in efficiency mode.
     *
     * @param {number} categoryId - The eMode category id defined by Risk or Pool Admins (0 - 255). 'categoryId' set to 0 is a non eMode category.
     * @param {Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>} [config] - If the protocol has been initialized with
     *   an erc-4337 wallet account, it can be used to override its configuration options.
     * @returns {Promise<TransactionResult>} The transaction's result.
     */
    setUserEMode(categoryId: number, config?: Partial<EvmErc4337WalletPaymasterTokenConfig | EvmErc4337WalletSponsorshipPolicyConfig | EvmErc4337WalletNativeCoinsConfig>): Promise<TransactionResult>;
    /**
     * Returns this or another account's data.
     *
     * @param {string} [account] - If set, returns the account's data for the given address.
     * @returns {Promise<AccountData>} The account's data.
     */
    getAccountData(account?: string): Promise<AccountData>;
    /** @private */
    private _getChainId;
    /** @private */
    private _getAddressMap;
    /** @private */
    private _getPoolContract;
    /** @private */
    private _getUiPoolDataProviderContract;
    /** @private */
    private _getTokenReserve;
    /** @private */
    private _getApproveTransaction;
    /** @private */
    private _assertTokenBalance;
    /** @private */
    private _assertTokenReserveStatus;
}
export type TransactionResult = import("@tetherto/wdk-wallet").TransactionResult;
export type BorrowOptions = import("@tetherto/wdk-wallet/protocols").BorrowOptions;
export type BorrowResult = import("@tetherto/wdk-wallet/protocols").BorrowResult;
export type SupplyOptions = import("@tetherto/wdk-wallet/protocols").SupplyOptions;
export type SupplyResult = import("@tetherto/wdk-wallet/protocols").SupplyResult;
export type WithdrawOptions = import("@tetherto/wdk-wallet/protocols").WithdrawOptions;
export type WithdrawResult = import("@tetherto/wdk-wallet/protocols").WithdrawResult;
export type RepayOptions = import("@tetherto/wdk-wallet/protocols").RepayOptions;
export type RepayResult = import("@tetherto/wdk-wallet/protocols").RepayResult;
export type WalletAccountReadOnlyEvm = import("@tetherto/wdk-wallet-evm").WalletAccountReadOnlyEvm;
export type EvmErc4337WalletPaymasterTokenConfig = import("@tetherto/wdk-wallet-evm-erc-4337").EvmErc4337WalletPaymasterTokenConfig;
export type EvmErc4337WalletSponsorshipPolicyConfig = import("@tetherto/wdk-wallet-evm-erc-4337").EvmErc4337WalletSponsorshipPolicyConfig;
export type EvmErc4337WalletNativeCoinsConfig = import("@tetherto/wdk-wallet-evm-erc-4337").EvmErc4337WalletNativeCoinsConfig;
export type AccountData = {
    /**
     * - The account's total collateral base.
     */
    totalCollateralBase: bigint;
    /**
     * - The account's total debt base.
     */
    totalDebtBase: bigint;
    /**
     * - The account's available borrowing base.
     */
    availableBorrowsBase: bigint;
    /**
     * - The account's current liquidation threshold.
     */
    currentLiquidationThreshold: bigint;
    /**
     * - The account's loan-to-value.
     */
    ltv: bigint;
    /**
     * - The account's health factor.
     */
    healthFactor: bigint;
};
import { LendingProtocol } from '@tetherto/wdk-wallet/protocols';
import { WalletAccountEvm } from '@tetherto/wdk-wallet-evm';
import { WalletAccountEvmErc4337, WalletAccountReadOnlyEvmErc4337 } from '@tetherto/wdk-wallet-evm-erc-4337';
