package voxgigrejectionreasongeneratorsdk

import (
	"github.com/voxgig-sdk/rejection-reason-generator-sdk/go/core"
	"github.com/voxgig-sdk/rejection-reason-generator-sdk/go/entity"
	"github.com/voxgig-sdk/rejection-reason-generator-sdk/go/feature"
	_ "github.com/voxgig-sdk/rejection-reason-generator-sdk/go/utility"
)

// Type aliases preserve external API.
type RejectionReasonGeneratorSDK = core.RejectionReasonGeneratorSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RejectionReasonGeneratorEntity = core.RejectionReasonGeneratorEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RejectionReasonGeneratorError = core.RejectionReasonGeneratorError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetRandomRejectionEntityFunc = func(client *core.RejectionReasonGeneratorSDK, entopts map[string]any) core.RejectionReasonGeneratorEntity {
		return entity.NewGetRandomRejectionEntity(client, entopts)
	}
	core.NewHealthEntityFunc = func(client *core.RejectionReasonGeneratorSDK, entopts map[string]any) core.RejectionReasonGeneratorEntity {
		return entity.NewHealthEntity(client, entopts)
	}
	core.NewHelpEntityFunc = func(client *core.RejectionReasonGeneratorSDK, entopts map[string]any) core.RejectionReasonGeneratorEntity {
		return entity.NewHelpEntity(client, entopts)
	}
	core.NewNonEntityFunc = func(client *core.RejectionReasonGeneratorSDK, entopts map[string]any) core.RejectionReasonGeneratorEntity {
		return entity.NewNonEntity(client, entopts)
	}
	core.NewRandomEntityFunc = func(client *core.RejectionReasonGeneratorSDK, entopts map[string]any) core.RejectionReasonGeneratorEntity {
		return entity.NewRandomEntity(client, entopts)
	}
	core.NewYesEntityFunc = func(client *core.RejectionReasonGeneratorSDK, entopts map[string]any) core.RejectionReasonGeneratorEntity {
		return entity.NewYesEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRejectionReasonGeneratorSDK = core.NewRejectionReasonGeneratorSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewRejectionReasonGeneratorSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *RejectionReasonGeneratorSDK  { return NewRejectionReasonGeneratorSDK(nil) }
func Test() *RejectionReasonGeneratorSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
