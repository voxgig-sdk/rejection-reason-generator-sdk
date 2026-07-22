<?php
declare(strict_types=1);

// RejectionReasonGenerator SDK utility: feature_hook

class RejectionReasonGeneratorFeatureHook
{
    public static function call(RejectionReasonGeneratorContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
