import axios from "axios";
const shahrvdevAPI = axios.create({
  baseURL: "https://shahr-v2-dev-91170.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return shahrvdevAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return shahrvdevAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_pet_list(payload) {
  return shahrvdevAPI.get(`/api/v1/pet/`);
}

function api_v1_pet_create(payload) {
  return shahrvdevAPI.post(`/api/v1/pet/`, payload.data);
}

function api_v1_pet_retrieve(payload) {
  return shahrvdevAPI.get(`/api/v1/pet/${payload.id}/`);
}

function api_v1_pet_update(payload) {
  return shahrvdevAPI.put(`/api/v1/pet/${payload.id}/`, payload.data);
}

function api_v1_pet_partial_update(payload) {
  return shahrvdevAPI.patch(`/api/v1/pet/${payload.id}/`, payload.data);
}

function api_v1_pet_destroy(payload) {
  return shahrvdevAPI.delete(`/api/v1/pet/${payload.id}/`);
}

function api_v1_signup_create(payload) {
  return shahrvdevAPI.post(`/api/v1/signup/`, payload.data);
}

function modules_articles_article_list(payload) {
  return shahrvdevAPI.get(`/modules/articles/article/`);
}

function modules_articles_article_create(payload) {
  return shahrvdevAPI.post(`/modules/articles/article/`, payload.data);
}

function modules_articles_article_retrieve(payload) {
  return shahrvdevAPI.get(`/modules/articles/article/${payload.id}/`);
}

function modules_articles_article_update(payload) {
  return shahrvdevAPI.put(`/modules/articles/article/${payload.id}/`, payload.data);
}

function modules_articles_article_partial_update(payload) {
  return shahrvdevAPI.patch(`/modules/articles/article/${payload.id}/`, payload.data);
}

function modules_articles_article_destroy(payload) {
  return shahrvdevAPI.delete(`/modules/articles/article/${payload.id}/`);
}

function rest_auth_login_create(payload) {
  return shahrvdevAPI.post(`/rest-auth/login/`, payload.data);
}

function rest_auth_logout_retrieve(payload) {
  return shahrvdevAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return shahrvdevAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return shahrvdevAPI.post(`/rest-auth/password/change/`, payload.data);
}

function rest_auth_password_reset_create(payload) {
  return shahrvdevAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_reset_confirm_create(payload) {
  return shahrvdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function rest_auth_registration_create(payload) {
  return shahrvdevAPI.post(`/rest-auth/registration/`, payload.data);
}

function rest_auth_registration_verify_email_create(payload) {
  return shahrvdevAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return shahrvdevAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return shahrvdevAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return shahrvdevAPI.patch(`/rest-auth/user/`, payload.data);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_pet_list,
  api_v1_pet_create,
  api_v1_pet_retrieve,
  api_v1_pet_update,
  api_v1_pet_partial_update,
  api_v1_pet_destroy,
  api_v1_signup_create,
  modules_articles_article_list,
  modules_articles_article_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};