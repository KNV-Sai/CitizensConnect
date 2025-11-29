import React, { useState, useMemo } from "react";
import {
  updatesCategories,
  getRecentUpdates,
  getCategoryStats
} from "./data/UpdatesData";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  AlertCircle,
  CheckCircle,
  Clock,
  ExternalLink,
  Search,
  Filter,
  RefreshCw
} from "lucide-react";
import "./Updates.css";
import "./Updates.css";

export default function Updates() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Toggle category expansion
  const toggleCategory = (categoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return '#dc2626';
      case 'high': return '#ea580c';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Resolved':
      case 'Completed':
        return <CheckCircle size={16} color="#10b981" />;
      case 'In Progress':
      case 'Active':
        return <Clock size={16} color="#f59e0b" />;
      case 'Upcoming':
        return <Calendar size={16} color="#6a47f2" />;
      default:
        return <AlertCircle size={16} color="#6b7280" />;
    }
  };

  // Filter updates based on search and priority
  const filteredUpdates = useMemo(() => {
    const allUpdates = Object.entries(updatesCategories).flatMap(([categoryKey, category]) =>
      category.updates.map(update => ({
        ...update,
        categoryKey,
        categoryTitle: category.title,
        categoryColor: category.color,
        categoryIcon: category.icon
      }))
    );

    return allUpdates.filter(update => {
      const matchesSearch = searchTerm === '' ||
        update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        update.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        update.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPriority = priorityFilter === 'all' || update.priority === priorityFilter;

      return matchesSearch && matchesPriority;
    });
  }, [searchTerm, priorityFilter]);

  // Group filtered updates by category
  const groupedUpdates = useMemo(() => {
    const groups = {};
    filteredUpdates.forEach(update => {
      if (!groups[update.categoryKey]) {
        groups[update.categoryKey] = [];
      }
      groups[update.categoryKey].push(update);
    });
    return groups;
  }, [filteredUpdates]);

  // Get category stats
  const categoryStats = getCategoryStats();

  return (
    <div className="updates-container">
      <div className="updates-header">
        <h1 className="updates-title">Latest Updates</h1>
        <p className="updates-subtitle">
          Stay informed about the latest developments in your community and government initiatives.
          Click on any category heading to view detailed updates.
        </p>

        {/* Search and Filters */}
        <div className="updates-controls">
          <div className="search-bar">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search updates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            Filters
            <ChevronDown size={16} className={showFilters ? 'rotated' : ''} />
          </button>

          {showFilters && (
            <div className="filter-options">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="all">All Priorities</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Update Categories */}
      <div className="updates-categories">
        {Object.entries(updatesCategories).map(([categoryKey, category]) => (
          <div key={categoryKey} className="update-category">
            <div
              className="category-header"
              onClick={() => toggleCategory(categoryKey)}
              style={{ borderLeftColor: category.color }}
            >
              <div className="category-info">
                <span className="category-icon">{category.icon}</span>
                <div className="category-text">
                  <h3 className="category-title" style={{ color: category.color }}>
                    {category.title}
                  </h3>
                  <p className="category-description">{category.description}</p>
                  <div className="category-stats">
                    <span className="update-count">
                      {groupedUpdates[categoryKey]?.length || 0} updates
                    </span>
                    {categoryStats.find(stat => stat.key === categoryKey)?.recentUpdate && (
                      <span className="last-updated">
                        Latest: {new Date(categoryStats.find(stat => stat.key === categoryKey).recentUpdate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="expand-icon">
                {expandedCategories[categoryKey] ?
                  <ChevronUp size={20} /> :
                  <ChevronDown size={20} />
                }
              </div>
            </div>

            {/* Expanded Updates */}
            {expandedCategories[categoryKey] && (
              <div className="category-updates">
                {groupedUpdates[categoryKey]?.length > 0 ? (
                  groupedUpdates[categoryKey].map((update) => (
                    <div
                      key={update.id}
                      className="update-item"
                      onClick={() => setSelectedUpdate(selectedUpdate?.id === update.id ? null : update)}
                    >
                      <div className="update-header">
                        <div className="update-meta">
                          <span
                            className="priority-badge"
                            style={{ backgroundColor: getPriorityColor(update.priority) }}
                          >
                            {update.priority}
                          </span>
                          <span className="update-date">
                            {new Date(update.date).toLocaleDateString()}
                          </span>
                          <div className="update-location">
                            <MapPin size={14} />
                            <span>{update.location}</span>
                          </div>
                        </div>
                        <div className="update-status">
                          {getStatusIcon(update.status)}
                          <span>{update.status}</span>
                        </div>
                      </div>

                      <h4 className="update-title">{update.title}</h4>
                      <p className="update-summary">{update.summary}</p>

                      {/* Detailed View */}
                      {selectedUpdate?.id === update.id && (
                        <div className="update-details">
                          <div className="detail-section">
                            <h5>Details</h5>
                            <p>{update.details}</p>
                          </div>

                          <div className="detail-grid">
                            <div className="detail-item">
                              <h6>Timeline</h6>
                              <p>{update.timeline}</p>
                            </div>

                            <div className="detail-item">
                              <h6>Contact</h6>
                              <p>{update.contact}</p>
                            </div>

                            <div className="detail-item">
                              <h6>Source</h6>
                              <p>{update.source}</p>
                            </div>
                          </div>

                          {update.resolution && (
                            <div className="detail-section">
                              <h5>Resolution</h5>
                              <p>{update.resolution}</p>
                            </div>
                          )}

                          {update.citizen_impact && (
                            <div className="detail-section">
                              <h5>Citizen Impact</h5>
                              <p>{update.citizen_impact}</p>
                            </div>
                          )}

                          {update.highlights && (
                            <div className="detail-section">
                              <h5>Highlights</h5>
                              <ul>
                                {update.highlights.map((highlight, idx) => (
                                  <li key={idx}>{highlight}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {update.url && (
                            <div className="detail-actions">
                              <a
                                href={update.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="external-link"
                              >
                                <ExternalLink size={14} />
                                View Source
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="no-updates">
                    <p>No updates found matching your filters.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Recent Updates Summary */}
      <div className="recent-updates-summary">
        <h3>📊 Recent Activity Summary</h3>
        <div className="summary-stats">
          {categoryStats.map((stat) => (
            <div key={stat.key} className="stat-item">
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-info">
                <span className="stat-number">{stat.updateCount}</span>
                <span className="stat-label">{stat.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
