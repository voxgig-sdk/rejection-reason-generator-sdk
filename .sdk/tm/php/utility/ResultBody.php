<?php
declare(strict_types=1);

// RejectionReasonGenerator SDK utility: result_body

class RejectionReasonGeneratorResultBody
{
    public static function call(RejectionReasonGeneratorContext $ctx): ?RejectionReasonGeneratorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
