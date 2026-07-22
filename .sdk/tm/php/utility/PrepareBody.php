<?php
declare(strict_types=1);

// RejectionReasonGenerator SDK utility: prepare_body

class RejectionReasonGeneratorPrepareBody
{
    public static function call(RejectionReasonGeneratorContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
