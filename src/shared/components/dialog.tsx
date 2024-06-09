import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { FC } from "react";

interface IDialogProps {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  children: React.ReactNode;
  buttonSubmit?: React.RefObject<HTMLButtonElement>;
}

export const Dialog: FC<IDialogProps> = ({
  isOpen,
  onOpenChange,
  title,
  children,
  buttonSubmit
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {
          (onClose) => (
            <>
              <ModalHeader>
                {title}
              </ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="success"
                  onPress={onClose}
                  form="form-company"
                  ref={buttonSubmit}
                >
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )
        }
      </ModalContent>
    </Modal>
  )
}