import { atom, useAtom } from "jotai"
import { User } from "../../../entities/user/model/types"

const showUserModalAtom = atom(false)
const selectedUserAtom = atom<User | null>(null)

export const useUserStore = () => {
  const [showUserModal, setShowUserModal] = useAtom(showUserModalAtom)
  const [selectedUser, setSelectedUser] = useAtom(selectedUserAtom)

  // 사용자 모달 열기
  const openUserModal = async (user: User) => {
    setSelectedUser(user)
    setShowUserModal(true)
  }

  return { showUserModal, setShowUserModal, selectedUser, openUserModal }
}
