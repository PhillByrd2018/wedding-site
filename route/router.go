package route

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)


func Init() *echo.Echo {
	e := Echo.New()
	//add validation to models
	e.Use(
		middleware.Secure()
		middleware.Gzip()
		middleware.Recover()
		middleware.Logger()
	)
	e.Use(middleware.CORS())

	e.POST("api/guestRSVP", api.submitRSVP)


}
