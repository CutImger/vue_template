// pinia状态库数据持久化hook

import { Store } from 'pinia';

// 定义类型
interface PersistOptions {
	storage?: Storage; // localStorage 或 sessionStorage
	key: string; // 缓存使用的键
}

const useStorePersist = <T extends Store>(
	store: T,
	options: PersistOptions
): void => {
	const { storage = localStorage, key } = options;

	// 从缓存中恢复状态
	const restoreState = (): void => {
		const savedState = storage.getItem(key);
		if (savedState) {
			store.$patch(JSON.parse(savedState));
		}
	};

	// 保存状态到缓存
	const saveState = (): void => {
		storage.setItem(key, JSON.stringify(store.$state));
	};

	// 在store初始化时恢复状态
	restoreState();

	// 监听状态变化并保存
	store.$subscribe(() => {
		saveState();
	});
};

export default useStorePersist;
