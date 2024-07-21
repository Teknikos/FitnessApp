const newUrl = "http://192.168.50.12:5213/";

const registerUser = async (email: string, password: string) => {
  console.log("registering new user...");
  try {
    const response = await fetch(newUrl + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      let errorMessages = "";

      if (errorResponse.errors) {
        for (const key in errorResponse.errors) {
          if (errorResponse.errors.hasOwnProperty(key)) {
            errorMessages += `${errorResponse.errors[key].join(" ")}\n`;
          }
        }
      } else {
        errorMessages = "An error occured";
      }
      console.log(`Response status: ${response.status}`)
      throw new Error(errorMessages);
    }

    const responseText = await response.text();
    if (responseText) 
    {
        const responseData = await response.json();
        console.log("User registered successfully", responseData);
        return responseData;

    } else {
        console.log("User registered successfully, but no response data.");
        return { message: "User registered successfully" };
    }
  } catch (error) {
    console.log("Error when registering user.");
    console.log(error.message);
    throw error;
  }
};

export { registerUser};