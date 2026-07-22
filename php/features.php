<?php
declare(strict_types=1);

// RejectionReasonGenerator SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RejectionReasonGeneratorFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RejectionReasonGeneratorBaseFeature();
            case "test":
                return new RejectionReasonGeneratorTestFeature();
            default:
                return new RejectionReasonGeneratorBaseFeature();
        }
    }
}
