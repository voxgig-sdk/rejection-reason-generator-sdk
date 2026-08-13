# RejectionReasonGenerator SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RejectionReasonGeneratorUtility.registrar = ->(u) {
  u.clean = RejectionReasonGeneratorUtilities::Clean
  u.done = RejectionReasonGeneratorUtilities::Done
  u.make_error = RejectionReasonGeneratorUtilities::MakeError
  u.feature_add = RejectionReasonGeneratorUtilities::FeatureAdd
  u.feature_hook = RejectionReasonGeneratorUtilities::FeatureHook
  u.feature_init = RejectionReasonGeneratorUtilities::FeatureInit
  u.fetcher = RejectionReasonGeneratorUtilities::Fetcher
  u.make_fetch_def = RejectionReasonGeneratorUtilities::MakeFetchDef
  u.make_context = RejectionReasonGeneratorUtilities::MakeContext
  u.make_options = RejectionReasonGeneratorUtilities::MakeOptions
  u.make_request = RejectionReasonGeneratorUtilities::MakeRequest
  u.make_response = RejectionReasonGeneratorUtilities::MakeResponse
  u.make_result = RejectionReasonGeneratorUtilities::MakeResult
  u.make_point = RejectionReasonGeneratorUtilities::MakePoint
  u.make_spec = RejectionReasonGeneratorUtilities::MakeSpec
  u.make_url = RejectionReasonGeneratorUtilities::MakeUrl
  u.param = RejectionReasonGeneratorUtilities::Param
  u.prepare_auth = RejectionReasonGeneratorUtilities::PrepareAuth
  u.prepare_body = RejectionReasonGeneratorUtilities::PrepareBody
  u.prepare_headers = RejectionReasonGeneratorUtilities::PrepareHeaders
  u.prepare_method = RejectionReasonGeneratorUtilities::PrepareMethod
  u.prepare_params = RejectionReasonGeneratorUtilities::PrepareParams
  u.prepare_path = RejectionReasonGeneratorUtilities::PreparePath
  u.prepare_query = RejectionReasonGeneratorUtilities::PrepareQuery
  u.graphql_body = RejectionReasonGeneratorUtilities::GraphqlBody
  u.graphql_errors = RejectionReasonGeneratorUtilities::GraphqlErrors
  u.result_basic = RejectionReasonGeneratorUtilities::ResultBasic
  u.result_body = RejectionReasonGeneratorUtilities::ResultBody
  u.result_headers = RejectionReasonGeneratorUtilities::ResultHeaders
  u.transform_request = RejectionReasonGeneratorUtilities::TransformRequest
  u.transform_response = RejectionReasonGeneratorUtilities::TransformResponse
}
