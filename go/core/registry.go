package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetRandomRejectionEntityFunc func(client *RejectionReasonGeneratorSDK, entopts map[string]any) RejectionReasonGeneratorEntity

var NewHealthEntityFunc func(client *RejectionReasonGeneratorSDK, entopts map[string]any) RejectionReasonGeneratorEntity

var NewHelpEntityFunc func(client *RejectionReasonGeneratorSDK, entopts map[string]any) RejectionReasonGeneratorEntity

var NewNonEntityFunc func(client *RejectionReasonGeneratorSDK, entopts map[string]any) RejectionReasonGeneratorEntity

var NewRandomEntityFunc func(client *RejectionReasonGeneratorSDK, entopts map[string]any) RejectionReasonGeneratorEntity

var NewYesEntityFunc func(client *RejectionReasonGeneratorSDK, entopts map[string]any) RejectionReasonGeneratorEntity

