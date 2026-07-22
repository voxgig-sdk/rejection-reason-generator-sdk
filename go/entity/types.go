// Typed models for the RejectionReasonGenerator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// GetRandomRejection is the typed data model for the get_random_rejection entity.
type GetRandomRejection struct {
	Reason *string `json:"reason,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GetRandomRejectionLoadMatch is the typed request payload for GetRandomRejection.LoadTyped.
type GetRandomRejectionLoadMatch struct {
	Reason *string `json:"reason,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Health is the typed data model for the health entity.
type Health struct {
	Status *string `json:"status,omitempty"`
}

// HealthLoadMatch is the typed request payload for Health.LoadTyped.
type HealthLoadMatch struct {
	Status *string `json:"status,omitempty"`
}

// Help is the typed data model for the help entity.
type Help struct {
}

// HelpLoadMatch is the typed request payload for Help.LoadTyped.
type HelpLoadMatch struct {
}

// Non is the typed data model for the non entity.
type Non struct {
	Reason *string `json:"reason,omitempty"`
	Type *string `json:"type,omitempty"`
}

// NonLoadMatch is the typed request payload for Non.LoadTyped.
type NonLoadMatch struct {
	Reason *string `json:"reason,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Random is the typed data model for the random entity.
type Random struct {
	Reason *string `json:"reason,omitempty"`
	Type *string `json:"type,omitempty"`
}

// RandomLoadMatch is the typed request payload for Random.LoadTyped.
type RandomLoadMatch struct {
	Reason *string `json:"reason,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Yes is the typed data model for the yes entity.
type Yes struct {
	Reason *string `json:"reason,omitempty"`
	Type *string `json:"type,omitempty"`
}

// YesLoadMatch is the typed request payload for Yes.LoadTyped.
type YesLoadMatch struct {
	Reason *string `json:"reason,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
