import { ProgressBar, Tour } from 'components';
import { Navbar } from 'primitives';

import * as S from './styles';
import { VisualizationDetailsProps } from './types';

export function VisualizationDetails({
  children,
  title,
  disabledOk,
  labelOk,
  tour,
  progress,
  onCancel,
  onOk,
  ...navbarProps
}: VisualizationDetailsProps) {
  return (
    <Navbar {...navbarProps}>
      <>
        <S.Header>
          <S.Title>{title}</S.Title>
          <ProgressBar progress={progress} />
        </S.Header>
        <S.Content>{children}</S.Content>
        <S.Footer>
          <S.ButtonFooter
            border
            buttonTheme="secondary"
            onClick={onCancel}
            type="button"
          >
            Cancelar
          </S.ButtonFooter>

          <S.ButtonContainer>
            <Tour {...tour}>
              <S.ButtonFooter
                border
                disabledBtn={disabledOk}
                buttonTheme="primary"
                onClick={onOk}
              >
                {labelOk}
              </S.ButtonFooter>
            </Tour>
          </S.ButtonContainer>
        </S.Footer>
      </>
    </Navbar>
  );
}
