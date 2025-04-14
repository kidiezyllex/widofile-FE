import { MenuItem } from '@/interface/types';
import {
  mdiAccountGroup,
  mdiFileDocument,
  mdiForum,
  mdiCommentTextMultiple,
  mdiCalendarMonth,
  mdiNoteText,
  mdiChartBar,
  mdiFileDocumentMultipleOutline,
  mdiClipboardListOutline,
  mdiFolder,
  mdiViewDashboard,
} from '@mdi/js';

export const dashboardMenuItems: MenuItem[] = [
  {
    id: 'projects',
    name: 'Quản lý dự án',
    path: '/dashboard/projects',
    icon: mdiViewDashboard,
    subMenu: [
      {
        id: 'projects-list',
        name: 'Danh sách dự án',
        path: '/dashboard/projects/list',
      },
      {
        id: 'projects-create',
        name: 'Tạo dự án mới',
        path: '/dashboard/projects/create',
      },
    ],
  },
  {
    id: 'document',
    name: 'Quản lý tài liệu',
    path: '/dashboard/documents',
    icon: mdiFileDocument,
    subMenu: [
      {
        id: 'document-personal',
        name: 'Tài liệu cá nhân',
        path: '/dashboard/documents/personal',
      },
      {
        id: 'document-project',
        name: 'Tài liệu dự án',
        path: '/dashboard/documents/project',
      },
      {
        id: 'document-shared',
        name: 'Tài liệu được chia sẻ',
        path: '/dashboard/documents/shared',
      },
      {
        id: 'document-categories',
        name: 'Danh mục tài liệu',
        path: '/dashboard/document-categories',
      },
    ],
  },
  // {
  //   id: 'task',
  //   name: 'Nhiệm vụ thiết kế',
  //   path: '/dashboard/tasks',
  //   icon: mdiClipboardListOutline,
  //   subMenu: [
  //     {
  //       id: 'task-list',
  //       name: 'Danh sách nhiệm vụ',
  //       path: '/dashboard/tasks',
  //     },
  //     {
  //       id: 'task-create',
  //       name: 'Tạo nhiệm vụ mới',
  //       path: '/dashboard/tasks/create',
  //     },
  //     {
  //       id: 'task-my',
  //       name: 'Nhiệm vụ của tôi',
  //       path: '/dashboard/tasks/my-tasks',
  //     },
  //   ],
  // },
  {
    id: 'forum',
    name: 'Thảo luận dự án',
    path: '/dashboard/forum',
    icon: mdiForum,
    subMenu: [
      {
        id: 'forum-posts',
        name: 'Bài viết',
        path: '/dashboard/forum/posts',
      },
      {
        id: 'forum-my-posts',
        name: 'Bài viết của tôi',
        path: '/dashboard/forum/my-posts',
      },
      {
        id: 'forum-create',
        name: 'Tạo bài viết mới',
        path: '/dashboard/forum/create',
      },
      {
        id: 'comments-post',
        name: 'Bình luận bài viết',
        path: '/dashboard/forum/comments',
      },
    ],
  },
];

export const adminMenuItems: MenuItem[] = [
  ...dashboardMenuItems,
  {
    id: 'user-management',
    name: 'Quản lý người dùng',
    path: '/dashboard/admin/users',
    icon: mdiAccountGroup,
    subMenu: [
      {
        id: 'users-list',
        name: 'Danh sách người dùng',
        path: '/dashboard/admin/users',
      },
      {
        id: 'users-create',
        name: 'Thêm người dùng mới',
        path: '/dashboard/admin/users/create',
      },
    ],
  },
  {
    id: 'document-categories',
    name: 'Phân loại tài liệu',
    path: '/dashboard/admin/document-categories',
    icon: mdiFileDocumentMultipleOutline,
  },
  {
    id: 'statistics',
    name: 'Thống kê hệ thống',
    path: '/dashboard/admin/statistics',
    icon: mdiChartBar,
  },
]; 