import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer pA-rIcJ55OziT7bK2Rl0hzvktna5cumEFEuAZg0iAByIvWhQ_Ia4WCFy1n46LhRXU2Mj9MkBAP_5Rp85YjoGIXUAal20YBoAvsba2Sc5boylHWTCPb8hszZkDOYRZHYx",
	},
});
