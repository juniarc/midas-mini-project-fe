const BASE_URL = "http://localhost:8081";

export const login = async (body) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Login Failed");
    }

    const { accessToken } = await response.json();

    return accessToken;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (body) => {
  console.log(body);
  try {
    const response = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Register Failed");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAllTimesheet = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/timesheet`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const createTimesheet = async (token, body) => {
  try {
    const response = await fetch(`${BASE_URL}/timesheet/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed create timesheet.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const findTimesheetById = async (token, id) => {
  try {
    const response = await fetch(`${BASE_URL}/timesheet/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed get timesheet.");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const editTimesheet = async (token, body, id) => {
  try {
    const response = await fetch(`${BASE_URL}/timesheet/edit?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed edit timesheet.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteTimesheet = async (token, id) => {
  try {
    const response = await fetch(`${BASE_URL}/timesheet/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed delete timesheet.");
    }
  } catch (error) {
    console.log(error);
  }
};
