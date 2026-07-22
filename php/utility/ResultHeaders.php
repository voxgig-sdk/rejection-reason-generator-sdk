<?php
declare(strict_types=1);

// RejectionReasonGenerator SDK utility: result_headers

class RejectionReasonGeneratorResultHeaders
{
    public static function call(RejectionReasonGeneratorContext $ctx): ?RejectionReasonGeneratorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
