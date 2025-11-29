// API service for backend integration
const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Get auth token from localStorage or wherever it's stored
  getAuthToken() {
    // This should match how your frontend stores the JWT token
    // For now, assuming it's stored in localStorage as 'token'
    return localStorage.getItem('token');
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = this.getAuthToken();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth endpoints
  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    // Store token if login successful
    if (response.success && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  async logout() {
    localStorage.removeItem('token');
    return { success: true };
  }

  // Issue endpoints
  async createIssue(issueData) {
    return this.request('/issues', {
      method: 'POST',
      body: JSON.stringify(issueData),
    });
  }

  async getAllIssues(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/issues?${queryString}` : '/issues';
    return this.request(endpoint);
  }

  async getMyIssues(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/issues/my?${queryString}` : '/issues/my';
    return this.request(endpoint);
  }

  async getIssue(id) {
    return this.request(`/issues/${id}`);
  }

  async updateIssue(id, updateData) {
    return this.request(`/issues/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateData),
    });
  }

  async deleteIssue(id) {
    return this.request(`/issues/${id}`, {
      method: 'DELETE',
    });
  }

  async voteOnIssue(id) {
    return this.request(`/issues/${id}/vote`, {
      method: 'POST',
    });
  }

  async addComment(issueId, content) {
    return this.request(`/issues/${issueId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }

  async deleteComment(issueId, commentId) {
    return this.request(`/issues/${issueId}/comments/${commentId}`, {
      method: 'DELETE',
    });
  }

  async getIssueStats() {
    return this.request('/issues/stats');
  }
}

// Export singleton instance
const apiService = new ApiService();
module.exports = apiService;
