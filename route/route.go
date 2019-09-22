package route

import (
	"fmt"
	"wedding-site/api"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

//builds and returns Echo
func Init() *echo.Echo {
	fmt.Println("Made it to the router. Starting Echo")
	//add validation to models
	e := echo.New()

	e.Use(
		middleware.Secure(),
		middleware.Gzip(),
		middleware.Recover(),
		middleware.Logger(),
	)

	e.Use(middleware.CORS())

	e.POST("api/guestRSVP", api.SubmitRSVP)

	return e

}
