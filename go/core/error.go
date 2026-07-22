package core

type RejectionReasonGeneratorError struct {
	IsRejectionReasonGeneratorError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRejectionReasonGeneratorError(code string, msg string, ctx *Context) *RejectionReasonGeneratorError {
	return &RejectionReasonGeneratorError{
		IsRejectionReasonGeneratorError: true,
		Sdk:              "RejectionReasonGenerator",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RejectionReasonGeneratorError) Error() string {
	return e.Msg
}
