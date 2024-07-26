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
        password: password,
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
      console.log(`Response status: ${response.status}`);
      throw new Error(errorMessages);
    }

    const responseText = await response.text();
    if (responseText) {
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

const loginUser = async (email: string, password: string, twoFactorCode: string = "string", twoFactorRecoveryCode: string = "string") => {
  // Todo: Add expo-secure-store to store access and refresh tokens.
  console.log("Logging in...");
  try {
    const response = await fetch(newUrl + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        twoFactorCode: twoFactorCode,
        twoFactorRecoveryCode: twoFactorRecoveryCode,
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
      console.log(`Response status: ${response.status}`);
      throw new Error(errorMessages);
    }

    
      const responseData = await response.json();
      console.log("User logged in successfully", responseData);
      return responseData;
    
  } catch (error) {
    throw error;
  }
};

export { registerUser, loginUser };
