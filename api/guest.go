package api

import (
	"fmt"
	"net/http"
	"wedding-site/model"

	"github.com/labstack/echo"
)

func SubmitRSVP(c echo.Context) error {

	fmt.Println("made it to the RSVP API. Calling service now.")
	// fmt.Println("RSVP made for: ", c)
	requestBody := &model.Guest{}

	if err := c.Bind(requestBody); err != nil {
		return err
	}

	fmt.Println("Here is the RSVP data", requestBody)

	return c.JSON(http.StatusOK, "You DID it")

}
