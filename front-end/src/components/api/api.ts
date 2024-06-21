const URL: string = "http://localhost:4000/";

export interface IMenuItem {
  key: string;
  translation: string;
}

export interface IApiError {
  error: {
    message: string;
  };
}

export const fetchMenuItemsAPI = async (
  languageCode: string
): Promise<IMenuItem[] | IApiError> => {
  try {
    const response = await fetch(`${URL}menu/${languageCode}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData: IApiError = await response.json();
      return errorData;
    }

    const data: IMenuItem[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: "Something went wrong. Please try again later.",
      },
    } as IApiError;
  }
};

