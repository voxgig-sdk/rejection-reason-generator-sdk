<?php
declare(strict_types=1);

// RejectionReasonGenerator SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RejectionReasonGeneratorMakeContext
{
    public static function call(array $ctxmap, ?RejectionReasonGeneratorContext $basectx): RejectionReasonGeneratorContext
    {
        return new RejectionReasonGeneratorContext($ctxmap, $basectx);
    }
}
